# use 


### set environment 
``` bash
$ nvm install 6.11.2
$ npm install -g yarn
$ npm install -g create-react-app
$ cd ${project}
$ create-react-app client

$ yarn eject
$ yarn add react@next
$ yarn add react-dom@next
$ yarn add prop-types
$ yarn add --dev node-sass sass-loader
$ yarn add classnames # 이거 scss 나 css 를 효율적으로 사용한다면 사용하는게 좋다. 
$ yarn add sass-material-colors
# https://www.npmjs.com/package/sass-material-colors
$ yarn add include-media # scaa 파일상에서 미디어 파일을 불러올 수 있습니다. 


$ yarn global add eslint
    # npm install -g eslint
$ eslint --init
    #   - use poppular style
    #   - Airbnb
    #   - React Yes
    #   - Javascript    
$ yarn add --dev nodemon
$ yarn add dotenv  
    # 이 폴더 들어가면 자동으로 환경변수를 저장할 수 있다. 나는 pyenv 도 같이 쓰고 있어서 
    # 특정 디렉ㄷ토리를 들어갈때 .env 에 작성된 내용의 스크립트 마저도 실행할 수 있다.

# for sass

```


## Workspace Build
 - nvm을 애용합시다.
 - create-react-app 그리고 yarn eject 로 bipolar project 를 애용합니다.

## style component VS scss
 - link : [style component](https://github.com/diegohaz/arc)
 1. 스타일 컴포넌트 편하다.
 2. 스타일 컴포넌트는 파일분리가 안되어 있어 소스 코드 관리하기가 조금 힘들다.
 3. scss 는 좋당...?

### 준비



## reference

 - 디렉토리 구조 참조 
    - https://github.com/diegohaz/arc/tree/master/src-example
 - 컴포넌트를 정규표현식으로 불러온다.??? 엥?? 
    - 파일을 불러온다면 디렉토리의 index.js 마다 무언가 불러와야한다? 이런게 있었는데.. 그러지 않아도 된다구 ?!
    - https://github.com/diegohaz/arc/blob/master/src-example/components/index.js
    - https://github.com/diegohaz/arc/wiki/Atomic-Design#do-not-worry