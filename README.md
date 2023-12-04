# Firo Website

This is the repository of Firo's website: [firo.org](https://firo.org). It can be run locally by using `bundle exec jekyll serve`. See [Jekyll's website](https://jekyllrb.com/) for more information.

## Development

The current versions and hashes of the wallets in the Downloads page are stored in `_data/downloads.yml`and can be used anywhere on the website. For example to show the latest version of the qt wallet anywhere in the website we will use `{{ site.data.downloads.firo_qt_version }}.`