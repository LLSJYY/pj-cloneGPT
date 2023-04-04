# 💻cloneGPT

### 프로젝트 개요

openAI를 이용한 ChatGPT 사이트를 클론한 프로젝트입니다.

### 기술 스택

![Badge](https://img.shields.io/badge/React-61DAFB?style=flat&logo=React&logoColor=white)
![Badge](https://img.shields.io/badge/NextJS-000000?style=flat&logo=Next.js&logoColor=white)
![Badge](https://img.shields.io/badge/storybook-FF4785?style=flat&logo=storybook&logoColor=white)
![Badge](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=TypeScript&logoColor=white)
![Badge](https://img.shields.io/badge/Recoil-764ABC?style=flat&logo=Recoil&logoColor=white)
![Badge](https://img.shields.io/badge/Tanstack--Query-000000?style=flat&logoColor=white)

### 💻 디렉토리 구조

```
pj-cloneGPT/src
.
├── api / # api 통신에 필요한 파일 (`axios.post()`)
├── asset 
├── component 
├── constant / # 상수를 모아둔 파일 (`"Explain quantum computing in simple terms" 와 같은 소개글`)
├── lib / # 상태
├── pages 
├── style / # global style
└── utils / # customhook 과 type (useApi,Types)

```

위의 디렉토리 구조는 pj-cloneGPT 레포지토리의 파일 및 폴더 구조와 간략한 설명글입니다.

### 주요기능
 해당 프로젝트는 openAI model gpt-3.5-turbo을 사용한 인공지능 채팅 웹입니다.
 
- Demo 사진
<img width="654" alt="image" src="https://user-images.githubusercontent.com/96014828/229769595-8b5a6aba-324d-4e13-8b3d-293e98aa11b6.png">

## 응답값 개선

해당 모델에 추가된 기능 role과 content를 미리 설정하여, 
어떤 요청이 특정 형태의 응답이 반환될 경우 정해진 형식의 chat 으로 나타납니다.  
현재 구현된 것은 개발코드, 순서가 있는 응답값입니다.

예를 들자면, 계란을 삶는 방법을 순서대로 알려줘 라는 요청이 있을경우 응답값이 ol,li tag로 감싸진 채로 제공됩니다.


## 여러개의 채팅

sideBar의 chatBox를 여러개를 구성하여 관심사 별로 진행할 수 있습니다
```
chatbox_0 => 코드에 관한 chat 
chatbox_1 => 요리에 관한 chat 
```

### 이슈 및 해결방법
- 모델 업그레이드 [gpt model 업그레이드 관한 Issue & PR](https://github.com/LLSJYY/pj-cloneGPT/issues/25)

기존에 사용했던 text-davinci-003 모델이 특정 사이트에서 제공하던 인공지능 챗보다 성능이 많이 떨어졌습니다.  
속도적인 부분은 많이 빨랐으나, 신뢰도가 많이 떨어지는 응답값의 빈도가 높아 유효성검사를 진행해야만 했습니다.
하지만 그과정에서 너무나 많은 경우의 수가 있어 꼭 개선이 필요했습니다. 

예를 들자면 isAlpha()와 같은 함수를 만들어 알파벳으로 시작하지 않는다면 재요청을 하는 식으로 사용하였으나, 정상적인 응답값일지라도 
재요청이 되었습니다. 

대안으로 모델 업그레이드를 선택하였으나 응답속도가 많이 느렸고,<strong>특정 형태의 응답이 반환될 경우 정해진 형식의 chatForm</strong>으로 표현을 하고 싶었기
때문에 
```
응답 > 유효성체크 > 특정폼으로 변환 > 렌더링 
```
로 진행되어 더 늦어졌습니다.

해결책으로 role,content 정보를 미리 삽입하여 특정 응답값이라면 미리셋팅된 태그로 감싸진 응답값을 반환하게 설정하였습니다.
현재는 dangerousSetInnerHTML 을 사용하여 api 응답값을 바로 삽입하여 2가지 과정이 생략된 상태여서 속도문제도 원활하게 해결되었습니다.





