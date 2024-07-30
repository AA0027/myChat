import { Stomp } from "@stomp/stompjs";
import { useEffect, useRef, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function ChatApp() {
    // STOMP 클라이언트를 위한 ref. 웹소켓 연결을 유지하기 위해 사용
    const stompClient = useRef(null);
    // Redux store에서 현재 사용자 정보 가져오기
    const {user, channel} = useSelector((store) => store);
    // 채팅 메시지 목록의 끝을 참조하는 ref. 이를 이용해 새 메시지가 추가될 때 스크롤을 이동
    // const messagesEndRef = useRef(null);
    // 컴포넌트 마운트 시 실행. 웹소켓 연결 및 초기 메시지 로딩
    // const [profileImg, setProfileImg] = useState(null);
    // const [customerSeq, setCustomerSeq] = useState("");
  
    // useEffect(() => {
    //   connect();
    //   fetchMessages();
    //   // 컴포넌트 언마운트 시 웹소켓 연결 해제
    //   return () => disconnect();
    // }, [roomId]);
    // 메시지 목록이 업데이트될 때마다 스크롤을 최하단으로 이동시키는 함수
    // useEffect(() => {
    //   scrollToBottom();
    // }, [messages]);
    // const scrollToBottom = () => {
    //   messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });

    // };
    // 웹소켓 연결 설정
    const connect = (channel) => {
      const socket = new WebSocket("ws://localhost:8080/channel");
      stompClient.current = Stomp.over(socket);
      stompClient.current.connect({}, () => {
      stompClient.current.subscribe(`/sub/${channel.id}`, () => {});
      console.log("방 번호", channel.id);
    });
    // 웹소켓 연결 해제
    const disconnect = () => {
      if (stompClient.current) {
        stompClient.current.disconnect();
      }
    }
    };

    // 새 메시지를 보내는 함수
    const sendMessage = (msg) => {
      const date = new Date();
      if (stompClient.current && msg) {
        const messageObj = {
          content: msg,
          chatUser: user,
          regdate: date,
          url: `/pub/${channel.id}`,
        };
        stompClient.current.send(`/chat/${channel.id}`, {}, JSON.stringify(messageObj));
      }
    }
  }