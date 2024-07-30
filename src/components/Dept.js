import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useInView } from 'react-intersection-observer';




const Dept = () => {
    const [ref, inView] = useInView();
    const [data, setData] = useState([]);
    const [page, setPage] = useState(0);

    const  productFetch = () => {
        axios({
            method: "get",
            url: `http://localhost:8080/messages/16?page=${page}`
        })
    .then((res) => {
    // 리스트 뒤로 붙여주기
    setData([...data, ...(res.data.content)])
    // 요청 성공 시에 페이지에 1 카운트 해주기
    setPage((page) => page + 1)
    })
    .catch((err) => {console.log(err)});
    };

    useEffect(() => {
        // inView가 true 일때만 실행한다.
    if (inView) {
        console.log(inView, '무한 스크롤 요청 🎃')
        
           // 실행할 함수
       productFetch();
        }
      
      }, [inView]);
        return (
        <>
            <div>
            <div>판매중</div>
            <div style={{width: "100px", height: "50px"}}>
                {data.map((data) => {
                    return (
                        <div key={data.id}>{data}</div>
                    
                    );
                })}
            <div ref={ref}>안녕</div>
            </div>
            </div>
        </>
    )
};

export default Dept;