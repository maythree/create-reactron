# create-reactron
> 'Electron' 기반의 'React.js'와 'webpack' Boilerplate  
(Electron based React.js and webpack Boilerplate)

## Getting Started
```bash
# clone reactron
git clone https://github.com/jinsng503/create-reactron.git
cd create-reactron
rm -rf .git
# install dpendency 
yarn install
```

## Development Script
```bash
# run reactron on develop mode
yarn dev
# run reactron on product mode
yarn start
# build mac install package
yarn build:osx
# build win(32/64 bit) install package
yarn win 
# remove ./dist
yarn clean
```

## Dependency
* require yarn or npm
* babel, webpack, webpack-dev-server and webpack-cli need to be installed global
<br>command : *yarn add global babel webpack webpack-dev-server webpack cli*