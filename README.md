🚩

# ✉️실시간 채팅앱 만들기
<br/>

### 💻프로젝트 개요 (2024-07-24 ~ 2024-07-30)
💬 처음으로 비관계형 데이터베이스인 mongodb 와 react를 사용하는 실습으로 실시간 채팅이 적합하다고 생각이되어
진행하게 되었다. 아이디 패스워드기반 인증구현, 채팅방 생성, 삭제, 회원과 실시간 채팅을 구현하였다.
- [x] [🍾 역할](#역할)
- [x] [🎯서비스 핵심기능](#서비스-핵심기능)
- [x] [🛠기술 스택](#기술-스택)
- [x] [✨기술적 의사결정](#기술적-의사결정)
- [x] [📖React학습](#react학습)
- [x] [📖NoSQL학습](#nosql학습)
- [x] [📖STOMP학습](#stomp학습)


<br/><br/>
<hr/>

### 🎯기술시연 영상
클릭시 유튜브 기술시연 영상   

 >#1.[로그인 및 회원가입](https://youtu.be/vDreVqhy6dY)    

<br/><br/>
### 🛠기술 스택
OS | Windows 10
--- | --- |
Language | ![Java](https://img.shields.io/badge/JAVA-000?style=for-the-badge&logo=java&logoColor=white) ![Spring](https://img.shields.io/badge/Spring-000?style=for-the-badge&logo=spring&logoColor=white) ![HTML5](https://img.shields.io/badge/html5-000?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-000?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-000?style=for-the-badge&logo=javascript&logoColor=white) ![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge)
IDE | ![STS4](https://img.shields.io/badge/STS4-000?style=for-the-badge&logo=spring&logoColor=white) ![intellijidea](https://img.shields.io/badge/Intellij-000?style=for-the-badge&logo=intellijidea&logoColor=white) ![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-000?style=for-the-badge&logo=visualstudiocode&logoColor=white)
Framework | ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white) 
Build Tool | ![Static Badge](https://img.shields.io/badge/Gradle-%2302303A?style=for-the-badge) ![mongodb](https://img.shields.io/badge/mongodb-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
Database | ![Mysql Database 8](https://img.shields.io/badge/MySql-F80000?style=for-the-badge)
Frontend | ![HTML5](https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/css3-1572B6?style=for-the-badge&logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![jQuery](https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=white)
Library | ![Spring Security](https://img.shields.io/badge/spring%20security-6DB33F?style=for-the-badge&logo=springsecurity&logoColor=white) 
Version Control | ![GitHub](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)
<br/><br/>

### 📖React학습
왜 react 인가??  
과거 웹동작 방식(SSR 방식)
- 기존방식은 요청시마다 서버에 시로운 페이지에 대한 요청을 하는 방식웹에서
  제공되는 정보량이 많아질수록 서버에 부하가 증가된다.


SPA 방식

- 데이터가 변경을 감지하여 해당부분만 자동으로 업데이트되게하능 방식이다.(Observer 패턴)
  데이터 변경을 감지하기위해서 추가로 서버가 필요, 이 서버에는 데이터 변경을 감지하는 엔진 역할 수행


프로젝트하면서 느낀점
- 기존의 방식과 다른 렌더링방식으로 처음에는 낯설었지만 프로젝트를 진행하면서 더효율적이라고 생각을 하게되었다
  하지만 데이터 변경을 감지할 상태변수를 관리하는것이 중요했고, 그 과정에서 Hook 사용법을 공부하게되었다.
<br/>
<hr/>
<br/>
### 📖NoSQL학습
NoSQL을 사용하는 이유
- 저장되는 데이터 형식의 특정 요구 사항에 맞게 취적화된 스토리지 모델을 사용가능, 예를 들어 데이터는 단순 키/값 쌍, JSON 문서 또는 모서리와 꼭지점으로 이루어진그래프로 저장될수 있다.
- 채팅앱을 만들면서 MySQL 과 MongoDB 를 사용하하여 JSON 문서로 저장
- NoSQL 이라서 SQL과 완전 반대되는 데이터베이스라고 처음에는 인식을 하였는데 공부를 하다보니 No only SQL 즉, SQL뿐만 아니라 다른 여러 장점을 가지고 있다.
- 많일 사용자가 많은 채팅앱이라고하면 대용량 데이터를 처리하고 데이터 모델링이 유연하고 뛰어난 확장성으로 검색에 유리한 MongoDB를 사용하게 되었다.   
<br/>
<hr/>
<br/>
### 📖STOMP학습

- 웹에서 사용하는 HTTP통신에는 여러 장점도 있지만 비연결성과 상태가 단방향 통신 으로 인하여 웹소켓을 사용하기로 하였다. 
웹 소켓은 한번 연결 맺은뒤 유지되고 양방향 통신이 가능하여 실시간 통신에 적합하다.
- STOMP는 간단한 메시지를 전송하기 위한 프로토콜로 메시지 브로커와 publisher - subscriber 방식을 사용한다
- 메시지 방핸자와 구독자가 존재하고 메시지를 보내는 사람과 받는 사람 구분, 브로커는 발행자가 보낸 메시지를 구독자에게 전달해주는 역할















  
