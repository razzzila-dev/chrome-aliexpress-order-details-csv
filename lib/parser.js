function AliOrderPageParser() {
    this.options = {
        selectors: {
            root: '.product-table',
            tableRow: 'tbody tr',

            orderId: '.order-no',

            goodInfoContainer: '.baobei',
            goodName: '.baobei-name',
            goodSeller: '.seller-sign',
            goodSpec: '.spec',

            price: '.price',
            quantity: '.quantity',
            amount: '.amount',
            tradeStatus: '.trade-status',
            shippingDetails: '.shipping'
        },
        nameMap: {
            name: 'Product name',
            spec: 'Product details',
            seller: 'Seller',
            price: 'Price',
            qty: 'Quantity',
            amount: 'Amount',
            tradeStatus: 'Order status',
            shippingDetails: 'Shipping details'
        },
        headerRow: [
            'name', 'spec', 'seller',
            'price', 'qty', 'amount',
            'tradeStatus', 'shippingDetails'
        ],
        separators: {
            row: "\r\n",
            col: ","
        },
    };

    this._virtualDataTree = [];
    this._result = [];
    this._orderId = '';
}

AliOrderPageParser.prototype = {
    process: function() {
        try {
            this._result = [];
            this._parseDataToVirtualTree();
            this._processVirtualTreeToResult();

            this._toOutput();
        } catch(e) {
            console.error(e.message);
            alert( __('Something went wrong! Are you on right page?\nError: ') + e.message);
        }
    },

    _parseDataToVirtualTree: function() {
        const body = document.querySelector(this.options.selectors.root),
            rows = body.querySelectorAll(this.options.selectors.tableRow),
            orderId = document.querySelector(this.options.selectors.orderId);

        this._orderId = orderId.innerText;

        rows.forEach((row) => {
            const goodInfoContainer = row.querySelector(
                this.options.selectors.goodInfoContainer
            );

            let name = goodInfoContainer.querySelector(this.options.selectors.goodName),
                seller = goodInfoContainer.querySelector(this.options.selectors.goodSeller),
                spec = goodInfoContainer.querySelectorAll(this.options.selectors.goodSpec),
                price = row.querySelector(this.options.selectors.price),
                qty = row.querySelector(this.options.selectors.quantity),
                amount = row.querySelector(this.options.selectors.amount),
                tradeStatus = row.querySelector(this.options.selectors.tradeStatus),
                shippingDetails = row.querySelector(this.options.selectors.shippingDetails);

            tradeStatusText = tradeStatus.innerText;
            if (tradeStatus.querySelector('a')) {
                tradeStatusText = tradeStatusText.replace(
                    tradeStatus.querySelector('a').innerText,
                    ''
                );
            }

            let specArr = [];
            spec.forEach((e) => {
                specArr.push(e.innerText);
            });

            this._virtualDataTree.push({
                name: name.innerText,
                seller: seller.innerText,
                spec: specArr.join("\n"),
                price: price.innerText,
                qty: qty.innerText,
                amount: amount.innerText,
                tradeStatus: tradeStatusText,
                shippingDetails: shippingDetails.innerText.replace(/\r/g, "")
            });
        });
    },

    _processVirtualTreeToResult: function() {
        this._result.push(
            this.options.headerRow.map(cellKey => this.options.nameMap[cellKey])
        );

        this._virtualDataTree.forEach((row) => {
            this._result.push(
                this.options.headerRow.map(cellKey => {
                    return '"' + row[cellKey].replace('"', '\'') + '"';
                })
            );
        });
    },

    _toOutput: function() {
        // send to output
        let rendered = this._result
            .map(row => row.join(this.options.separators.col))
            .join(this.options.separators.row);

        var virtualLink = document.createElement('a');
        virtualLink.setAttribute(
            'href',
            "data:text/csv;charset=utf-8,\uFEFF"
                + encodeURIComponent(rendered)
        );
        virtualLink.setAttribute('download', this._orderId + '.csv');
        virtualLink.click();
    },
};

function __(phrase) {
    return phrase;
}
