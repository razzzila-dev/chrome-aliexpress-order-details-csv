# Aliexpress order parser to the CSV (Excel)

[![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://choosealicense.com/licenses/mit/)
[![GitHub release](https://img.shields.io/badge/release-v0.1.0-4078c0.svg)](https://github.com/razzzila-dev/chrome-aliexpress-order-details-csv/releases/)
[![Ask Me Anything !](https://img.shields.io/badge/Ask%20me-anything-1abc9c.svg)](mailto:dev@nikitaisakov.com?subject=[GitHub]%20Ask%20me%20anything)

It is the example of an extension for Google Chrome which parses order details from Aliexpress to the CSV (Excel) format.

## Installation

Download archive with the latest version of this extension.
Then navigate to `chrome://extensions` in your Chrome browser.
In the top right corner will be a "Developer mode" switcher. Turn it on.

![Chrome extensions page](docs/chrome_ext_page.png)

Below will appear the "Load unpacked" button.
Choose the root folder with this extension (the folder where located the manifest file).

If all will be done right you will see a new card of extension like at image below.

![Chrome extensions card](docs/ext_card.png)

## Usage
Now you can navigate to any Aliexpress order details page and click on the extension icon on the right side of the navigation bar.

For doing so open your orders page on the Aliexpress.

![My orders page on the Aliexpress](docs/my_orders_page.png)

Here you can open the order details page:

![Aliexpress order details page](docs/order_details_page.png)

Clicking the extension icon on this page you will trigger parsing and downloading the CSV file. Order id will be a file name. 

![New table downloaded file](docs/new_download.png)

The file will look like this one:

![Result table](docs/result_table.png)

## Bugs & features

That is only the example and there is no guarantees that it will support in the long term. For bugs, please, open new issues and I will answer you as will have free time.

About personal improvements and deep integrations write to me on [Dev account](mailto:dev@nikitaisakov.com?subject=[GitHub]%20Aliexpress%20order%20parser).

## License
[MIT](https://choosealicense.com/licenses/mit/)
