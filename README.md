## Overview

File manager and editor for content and data files powering digital-land.info. The File-manager is a preconfigured instance of the [NetlifyCMS](https://www.netlifycms.org)

## Requirements

- Node and NPM (Suggest using Node Version Manager (known as NVM))
- Python and ability to use Makefiles

## Installation

1. Install dependencies to your machine with: `make init`
2. Run locally with `make serve`
3. The CMS should load in your browser

## Usage

There are two primary files to configure for the file manager:

- [filemanager.collections.js](manager/filemanager.collections.js) - Configure the 'collections' and files you want the filemanager to create. 
- [filemanager.config.js](manager/filemanager.config.js) - Configure backend settings such as which repository to add files to

## Reference

- [NetlifyCMS Documentation](https://www.netlifycms.org/docs/intro/)

## Author

- [Paul Smith](https://twitter.com/paulmsmith) - Digital Land Team

## License

Please see [LICENSE](LICENSE).
