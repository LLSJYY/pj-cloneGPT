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

## 출력의 단순화

해당 모델에 추가된 기능 role과 content를 미리 적용하여, 
어떤 요청이 특정 형태의 응답이 반환될 경우 정해진 형식의 chat 으로 나타납니다.
현재 구현된 것은 개발코드, 순서가 있는 응답값입니다.
예를 들자면, 계란을 삶는 방법을 순서대로 알려줘 라는 요청이 있을경우 ol,li tag로 감싸진 후 출력되어 api 응답값을 후처리를 하지 않아도 됩니다


## 여러개의 채팅

sideBar의 chatBox를 여러개를 구성하여 관심사 별로 진행할 수 있습니다
```
chatbox_0 => 코드에 관한 chat 
chatbox_1 => 요리에 관한 chat 
```


