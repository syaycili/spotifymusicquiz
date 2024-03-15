import React, { useState, useEffect } from 'react';
import './Loading.css';

const quotes = [
    "Ya olduğun gibi görün, ya göründüğün gibi ol.",
    "Beni unutursan unuturum, seni unutmam mümkün değil.",
    "Hayatta en hakiki mürşit ilimdir.",
    "Ey yükselen yeni nesil, istikbal sizindir. Cumhuriyet'i biz kurduk, onu yükseltecek ve sürdürecek sizlersiniz.",
    "En büyük savaşta, en büyük zafer insanın kendi nefsiyle yaptığı savaştır.",
    "Hiçbir şeye gücünüz yetmiyorsa, hiçbir şey yapamıyorsanız kendi iç dünyanızda gezintiye çıkın.",
    "Bütün milletlerin gözü kamaşsın diye, gök kubbe altında en parlak yıldız Türk olmalıdır.",
    "Ey Türk Gençliği! Birinci vazifen, Türk istiklâlini, Türk Cumhuriyeti'ni, ilelebet muhafaza ve müdafaa etmektir.",
    "Türk milleti tarihteki büyük devletlerin yıkılmasında maddi sebepler aramaz. Daima manevi sebepler aramış ve de bulmuştur.",
    "Başarının sırrı hiçbir zaman tesadüf değil, her zaman çalışmadır.",
    "Türk milleti bağımsızlığını ve hürriyetini korumak konusunda yüksek bir kararlılık ve azimle hareket etmelidir.",
    "Yükselmek için korkma, daima yüksel."
  ];
  
  const Loading = () => {
    const [quote, setQuote] = useState(quotes[0]);
    const [index, setIndex] = useState(0);
    const [visible, setVisible] = useState(true);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setVisible(false);
        setTimeout(() => {
          setIndex(prevIndex => (prevIndex + 1) % quotes.length);
          setVisible(true);
        }, 500); // Wait for fade out transition to complete
      }, 3000);
  
      return () => {
        clearInterval(interval);
      };
    }, []);
  
    useEffect(() => {
      if (visible) {
        setQuote(quotes[index]);
      }
    }, [index, visible]);
  
    return (
      <div className="loading-container">
        <div className={`loading-animation`}></div>
        <p className={`loading-quote ${visible ? 'visible' : ''}`}>{quote}</p>
      </div>
    );
  };
  
  export default Loading;