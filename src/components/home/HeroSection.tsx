
import { useEffect } from "react";
import heroImage from "@/assets/hero.png";

const Icon = {
  Shield: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  Network: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <circle cx="12" cy="12" r="2"/>
      <path d="M20 12a8 8 0 11-16 0 8 8 0 0116 0z"/>
      <path d="M12 2v4M12 18v4M2 12h4M18 12h4"/>
    </svg>
  ),
  Server: () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
      <rect x="2" y="2" width="20" height="8" rx="2"/>
      <rect x="2" y="14" width="20" height="8" rx="2"/>
    </svg>
  ),
  Arrow: () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M5 12h14M12 5l7 7-7 7"/>
    </svg>
  ),
  Phone: () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
    </svg>
  ),
};

const STYLES = `
@import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

body{
font-family:'Nunito',sans-serif;
background:#fff;
overflow-x:hidden;
}

@keyframes morphBlob{
0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%;}
33%{border-radius:35% 65% 40% 60%/60% 35% 65% 40%;}
66%{border-radius:55% 45% 65% 35%/35% 55% 45% 65%;}
}

@keyframes float{
0%,100%{transform:translateY(0);}
50%{transform:translateY(-15px);}
}

.blob-main{
position:absolute;
top:-100px;
right:-150px;
width:650px;
height:600px;
background:linear-gradient(135deg,#0fbf8c,#1de8b5,#66f5d2);
animation:morphBlob 12s ease-in-out infinite;
opacity:.9;
}

.dots-bg{
position:absolute;
inset:0;
background-image:radial-gradient(circle,rgba(15,191,140,.2) 1.5px,transparent 1.5px);
background-size:32px 32px;
}

.grad-text{
background:linear-gradient(135deg,#0fbf8c,#14d4a8,#3de0b0);
-webkit-background-clip:text;
-webkit-text-fill-color:transparent;
}

.hero-img{
width:420px;
border-radius:12px;
box-shadow:none;
animation:none;
}
`;

function FloatingStats() {

  const stats = [
    { value: "99.9%", label: "Uptime", top: "-20px", left: "-50px", color: "#10b981" },
    { value: "1240", label: "Threats Blocked", top: "120px", right: "-60px", color: "#ef4444" },
    { value: "847", label: "Active Nodes", bottom: "60px", left: "-60px", color: "#3b82f6" },
    { value: "10 Gbps", label: "Bandwidth", bottom: "-20px", right: "-50px", color: "#f59e0b" },
  ];

  return (
    <>
      {stats.map((s, i) => (
        <div
          key={i}
          style={{
            position: "absolute",
            background: "white",
            padding: "12px 16px",
            borderRadius: 14,
            boxShadow: "0 20px 50px rgba(0,0,0,.15)",
            textAlign: "center",
            minWidth: 110,
            ...s,
          }}
        >
          <div
            style={{
              fontWeight: 800,
              fontFamily: "Sora",
              color: s.color,
              fontSize: 16,
            }}
          >
            {s.value}
          </div>

          <div
            style={{
              fontSize: 11,
              fontWeight: 700,
              color: "#64748b",
            }}
          >
            {s.label}
          </div>
        </div>
      ))}
    </>
  );
}

export default function Hero() {

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = STYLES;
    document.head.appendChild(style);
  }, []);

  return (
    <section
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        background: "white",
        padding: "80px 60px",
      }}
    >
      <div className="blob-main"></div>
      <div className="dots-bg"></div>

      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          width: "100%",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 70,
          alignItems: "center",
        }}
      >

        {/* LEFT SIDE */}
        <div>

          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "rgba(15,191,140,.1)",
              padding: "8px 20px",
              borderRadius: 50,
              marginBottom: 25,
              fontWeight: 700,
              color: "#0fbf8c",
            }}
          >
            🚀 Enterprise Digital Infrastructure
          </div>

          <h1
            style={{
              fontFamily: "Sora",
              fontSize: 56,
              fontWeight: 900,
              lineHeight: 1.1,
              marginBottom: 25,
            }}
          >
            Powering the <br />
            Future of <br />
            <span className="grad-text">Enterprise IT</span>
          </h1>

          <p
            style={{
              fontSize: 17,
              color: "#6b8f80",
              lineHeight: 1.7,
              marginBottom: 35,
              maxWidth: 500,
            }}
          >
            MV Business Solutions delivers scalable networking,
            cybersecurity, and data infrastructure solutions
            that enable organizations to operate securely and efficiently.
          </p>

          <div style={{ display: "flex", gap: 15 }}>
            <button
              style={{
                background: "linear-gradient(135deg,#0fbf8c,#0a9e76)",
                color: "white",
                border: "none",
                padding: "14px 28px",
                borderRadius: 50,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              Explore Solutions <Icon.Arrow />
            </button>

            <button
              style={{
                background: "white",
                border: "2px solid #0fbf8c",
                color: "#0fbf8c",
                padding: "14px 28px",
                borderRadius: 50,
                fontWeight: 700,
                display: "flex",
                alignItems: "center",
                gap: 8,
                cursor: "pointer",
              }}
            >
              <Icon.Phone /> Talk to Expert
            </button>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div
          style={{
            position: "relative",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >

          <img
            src={heroImage}
            alt="Enterprise IT"
            className="hero-img"
          />

          <FloatingStats />

        </div>

      </div>
    </section>
  );
}





// import { useEffect } from "react";
// import heroImage from "@/assets/hero.png";

// const Icon = {
//   Arrow: () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M5 12h14M12 5l7 7-7 7"/>
//     </svg>
//   ),
//   Phone: () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
//     </svg>
//   ),
// };

// const STYLES = `
// @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

// body{
// font-family:'Nunito',sans-serif;
// background:#fff;
// overflow-x:hidden;
// }

// /* Blob Animation */

// @keyframes morphBlob{
// 0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%;}
// 33%{border-radius:35% 65% 40% 60%/60% 35% 65% 40%;}
// 66%{border-radius:55% 45% 65% 35%/35% 55% 45% 65%;}
// }

// /* Logo Color Blob */

// .blob-main{
// position:absolute;
// top:-100px;
// right:-150px;
// width:650px;
// height:600px;
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// animation:morphBlob 12s ease-in-out infinite;
// opacity:.25;
// filter:blur(40px);
// }

// /* Dots background */

// .dots-bg{
// position:absolute;
// inset:0;
// background-image:radial-gradient(circle,rgba(0,168,255,.2) 1.5px,transparent 1.5px);
// background-size:32px 32px;
// }

// /* Gradient heading */

// .grad-text{
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// -webkit-background-clip:text;
// -webkit-text-fill-color:transparent;
// }

// /* Image */

// .hero-img{
// width:420px;
// border-radius:12px;
// box-shadow:none;
// }
// `;

// function FloatingStats() {

//   const stats = [
//     { value: "99.9%", label: "Uptime", top: "-20px", left: "-50px", color: "#38d66b" },
//     { value: "1240", label: "Threats Blocked", top: "120px", right: "-60px", color: "#ff2d7a" },
//     { value: "847", label: "Active Nodes", bottom: "60px", left: "-60px", color: "#00a8ff" },
//     { value: "10 Gbps", label: "Bandwidth", bottom: "-20px", right: "-50px", color: "#ff7a00" },
//   ];

//   return (
//     <>
//       {stats.map((s, i) => (
//         <div
//           key={i}
//           style={{
//             position: "absolute",
//             background: "white",
//             padding: "12px 16px",
//             borderRadius: 14,
//             boxShadow: "0 20px 50px rgba(0,0,0,.12)",
//             textAlign: "center",
//             minWidth: 110,
//             ...s,
//           }}
//         >
//           <div
//             style={{
//               fontWeight: 800,
//               fontFamily: "Sora",
//               color: s.color,
//               fontSize: 16,
//             }}
//           >
//             {s.value}
//           </div>

//           <div
//             style={{
//               fontSize: 11,
//               fontWeight: 700,
//               color: "#64748b",
//             }}
//           >
//             {s.label}
//           </div>
//         </div>
//       ))}
//     </>
//   );
// }

// export default function Hero() {

//   useEffect(() => {
//     const style = document.createElement("style");
//     style.innerHTML = STYLES;
//     document.head.appendChild(style);
//   }, []);

//   return (
//     <section
//       style={{
//         position: "relative",
//         minHeight: "100vh",
//         display: "flex",
//         alignItems: "center",
//         overflow: "hidden",
//         background: "white",
//         padding: "80px 60px",
//       }}
//     >
//       <div className="blob-main"></div>
//       <div className="dots-bg"></div>

//       <div
//         style={{
//           maxWidth: 1200,
//           margin: "0 auto",
//           width: "100%",
//           display: "grid",
//           gridTemplateColumns: "1fr 1fr",
//           gap: 70,
//           alignItems: "center",
//         }}
//       >

//         {/* LEFT */}

//         <div>

//           <div
//             style={{
//               display: "inline-flex",
//               alignItems: "center",
//               gap: 8,
//               background: "rgba(0,168,255,.1)",
//               padding: "8px 20px",
//               borderRadius: 50,
//               marginBottom: 25,
//               fontWeight: 700,
//               color: "#00a8ff",
//             }}
//           >
//             🚀 Enterprise Digital Infrastructure
//           </div>

//           <h1
//             style={{
//               fontFamily: "Sora",
//               fontSize: 56,
//               fontWeight: 900,
//               lineHeight: 1.1,
//               marginBottom: 25,
//             }}
//           >
//             Powering the <br />
//             Future of <br />
//             <span className="grad-text">Enterprise IT</span>
//           </h1>

//           <p
//             style={{
//               fontSize: 17,
//               color: "#6b7280",
//               lineHeight: 1.7,
//               marginBottom: 35,
//               maxWidth: 500,
//             }}
//           >
//             MV Business Solutions delivers scalable networking,
//             cybersecurity, and data infrastructure solutions
//             that enable organizations to operate securely and efficiently.
//           </p>

//           <div style={{ display: "flex", gap: 15 }}>

//             <button
//               style={{
//                 background: "linear-gradient(135deg,#ff2d7a,#ff7a00)",
//                 color: "white",
//                 border: "none",
//                 padding: "14px 28px",
//                 borderRadius: 50,
//                 fontWeight: 700,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 cursor: "pointer",
//               }}
//             >
//               Explore Solutions <Icon.Arrow />
//             </button>

//             <button
//               style={{
//                 background: "white",
//                 border: "2px solid #00a8ff",
//                 color: "#00a8ff",
//                 padding: "14px 28px",
//                 borderRadius: 50,
//                 fontWeight: 700,
//                 display: "flex",
//                 alignItems: "center",
//                 gap: 8,
//                 cursor: "pointer",
//               }}
//             >
//               <Icon.Phone /> Talk to Expert
//             </button>

//           </div>
//         </div>

//         {/* RIGHT */}

//         <div
//           style={{
//             position: "relative",
//             display: "flex",
//             alignItems: "center",
//             justifyContent: "center",
//           }}
//         >

//           <img
//             src={heroImage}
//             alt="Enterprise IT"
//             className="hero-img"
//           />

//           <FloatingStats />

//         </div>

//       </div>
//     </section>
//   );
// }





// import { useEffect } from "react";
// import heroImage from "@/assets/hero.png";

// const Icon = {
//   Arrow: () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M5 12h14M12 5l7 7-7 7"/>
//     </svg>
//   ),
//   Phone: () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
//     </svg>
//   ),
// };

// const STYLES = `
// @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

// body{
// font-family:'Nunito',sans-serif;
// background:#fff;
// overflow-x:hidden;
// }

// /* Blob */

// @keyframes morphBlob{
// 0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%;}
// 33%{border-radius:35% 65% 40% 60%/60% 35% 65% 40%;}
// 66%{border-radius:55% 45% 65% 35%/35% 55% 45% 65%;}
// }

// .blob-main{
// position:absolute;
// top:-120px;
// right:-120px;
// width:600px;
// height:550px;
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// animation:morphBlob 14s ease-in-out infinite;
// opacity:.18;
// filter:blur(50px);
// }

// /* Curved Line Background */

// .curve-bg{
// position:absolute;
// width:100%;
// height:100%;
// top:0;
// left:0;
// pointer-events:none;
// opacity:.25;
// }

// /* Gradient text */

// .grad-text{
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// -webkit-background-clip:text;
// -webkit-text-fill-color:transparent;
// }

// /* Hero image */

// .hero-img{
// width:420px;
// border-radius:12px;
// }
// `;

// function FloatingStats(){

// const stats=[
// {value:"99.9%",label:"Uptime",top:"-20px",left:"-50px",color:"#38d66b"},
// {value:"1240",label:"Threats Blocked",top:"120px",right:"-60px",color:"#ff2d7a"},
// {value:"847",label:"Active Nodes",bottom:"60px",left:"-60px",color:"#00a8ff"},
// {value:"10 Gbps",label:"Bandwidth",bottom:"-20px",right:"-50px",color:"#ff7a00"},
// ];

// return(
// <>
// {stats.map((s,i)=>(
// <div
// key={i}
// style={{
// position:"absolute",
// background:"white",
// padding:"12px 16px",
// borderRadius:14,
// boxShadow:"0 20px 50px rgba(0,0,0,.12)",
// textAlign:"center",
// minWidth:110,
// ...s
// }}
// >

// <div style={{
// fontWeight:800,
// fontFamily:"Sora",
// color:s.color,
// fontSize:16
// }}>
// {s.value}
// </div>

// <div style={{
// fontSize:11,
// fontWeight:700,
// color:"#64748b"
// }}>
// {s.label}
// </div>

// </div>
// ))}
// </>
// )
// }

// export default function Hero(){

// useEffect(()=>{
// const style=document.createElement("style");
// style.innerHTML=STYLES;
// document.head.appendChild(style);
// },[])

// return(

// <section
// style={{
// position:"relative",
// minHeight:"100vh",
// display:"flex",
// alignItems:"center",
// overflow:"hidden",
// background:"white",
// padding:"80px 60px"
// }}
// >

// <div className="blob-main"></div>

// {/* Curved Background */}

// <svg className="curve-bg" viewBox="0 0 1440 800">

// <path
// d="M0 300 Q400 100 800 300 T1440 250"
// stroke="url(#grad)"
// strokeWidth="2"
// fill="none"
// />

// <defs>
// <linearGradient id="grad">
// <stop offset="0%" stopColor="#ff2d7a"/>
// <stop offset="25%" stopColor="#ff7a00"/>
// <stop offset="50%" stopColor="#ffd400"/>
// <stop offset="75%" stopColor="#38d66b"/>
// <stop offset="100%" stopColor="#00a8ff"/>
// </linearGradient>
// </defs>

// </svg>

// <div
// style={{
// maxWidth:1200,
// margin:"0 auto",
// width:"100%",
// display:"grid",
// gridTemplateColumns:"1fr 1fr",
// gap:70,
// alignItems:"center"
// }}
// >

// {/* LEFT */}

// <div>

// <div
// style={{
// display:"inline-flex",
// alignItems:"center",
// gap:8,
// background:"rgba(0,168,255,.1)",
// padding:"8px 20px",
// borderRadius:50,
// marginBottom:25,
// fontWeight:700,
// color:"#00a8ff"
// }}
// >
// 🚀 Enterprise Digital Infrastructure
// </div>

// <h1
// style={{
// fontFamily:"Sora",
// fontSize:56,
// fontWeight:900,
// lineHeight:1.1,
// marginBottom:25
// }}
// >
// Powering the <br/>
// Future of <br/>
// <span className="grad-text">Enterprise IT</span>
// </h1>

// <p
// style={{
// fontSize:17,
// color:"#6b7280",
// lineHeight:1.7,
// marginBottom:35,
// maxWidth:500
// }}
// >
// MV Business Solutions delivers scalable networking,
// cybersecurity, and data infrastructure solutions
// that enable organizations to operate securely and efficiently.
// </p>

// <div style={{display:"flex",gap:15}}>

// <button
// style={{
// background:"linear-gradient(135deg,#ff2d7a,#ff7a00)",
// color:"white",
// border:"none",
// padding:"14px 28px",
// borderRadius:50,
// fontWeight:700,
// display:"flex",
// alignItems:"center",
// gap:8,
// cursor:"pointer"
// }}
// >
// Explore Solutions <Icon.Arrow/>
// </button>

// <button
// style={{
// background:"white",
// border:"2px solid #00a8ff",
// color:"#00a8ff",
// padding:"14px 28px",
// borderRadius:50,
// fontWeight:700,
// display:"flex",
// alignItems:"center",
// gap:8,
// cursor:"pointer"
// }}
// >
// <Icon.Phone/> Talk to Expert
// </button>

// </div>
// </div>

// {/* RIGHT */}

// <div
// style={{
// position:"relative",
// display:"flex",
// alignItems:"center",
// justifyContent:"center"
// }}
// >

// <img
// src={heroImage}
// alt="Enterprise IT"
// className="hero-img"
// />

// <FloatingStats/>

// </div>

// </div>

// </section>

// )
// }





// import { useEffect } from "react";
// import heroImage from "@/assets/hero.png";

// const Icon = {
//   Arrow: () => (
//     <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M5 12h14M12 5l7 7-7 7"/>
//     </svg>
//   ),
//   Phone: () => (
//     <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
//       <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013 4.18 2 2 0 015 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L9.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
//     </svg>
//   ),
// };

// const STYLES = `
// @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

// body{
// font-family:'Nunito',sans-serif;
// background:#fff;
// overflow-x:hidden;
// }

// /* blob */

// @keyframes morphBlob{
// 0%,100%{border-radius:60% 40% 55% 45%/50% 60% 40% 50%;}
// 33%{border-radius:35% 65% 40% 60%/60% 35% 65% 40%;}
// 66%{border-radius:55% 45% 65% 35%/35% 55% 45% 65%;}
// }

// .blob-main{
// position:absolute;
// top:-120px;
// right:-120px;
// width:600px;
// height:550px;
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// animation:morphBlob 14s ease-in-out infinite;
// opacity:.18;
// filter:blur(50px);
// }

// /* curved line */

// .curve-bg{
// position:absolute;
// width:100%;
// height:100%;
// top:0;
// left:0;
// pointer-events:none;
// opacity:.25;
// }

// /* gradient heading */

// .grad-text{
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// -webkit-background-clip:text;
// -webkit-text-fill-color:transparent;
// }

// /* image styles */

// .hero-img{
// width:420px;
// border-radius:12px;
// }

// /* image container */

// .image-box{
// position:relative;
// padding:16px;
// border-radius:20px;
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// }

// .image-inner{
// background:white;
// padding:12px;
// border-radius:16px;
// }

// .image-glow{
// position:absolute;
// width:520px;
// height:520px;
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// filter:blur(120px);
// opacity:.18;
// z-index:-1;
// }
// `;

// function FloatingStats(){

// const stats=[
// {value:"99.9%",label:"Uptime",top:"-20px",left:"-50px",color:"#38d66b"},
// {value:"1240",label:"Threats Blocked",top:"120px",right:"-60px",color:"#ff2d7a"},
// {value:"847",label:"Active Nodes",bottom:"60px",left:"-60px",color:"#00a8ff"},
// {value:"10 Gbps",label:"Bandwidth",bottom:"-20px",right:"-50px",color:"#ff7a00"},
// ];

// return(
// <>
// {stats.map((s,i)=>(
// <div
// key={i}
// style={{
// position:"absolute",
// background:"white",
// padding:"12px 16px",
// borderRadius:14,
// boxShadow:"0 20px 50px rgba(0,0,0,.12)",
// textAlign:"center",
// minWidth:110,
// ...s
// }}
// >

// <div style={{
// fontWeight:800,
// fontFamily:"Sora",
// color:s.color,
// fontSize:16
// }}>
// {s.value}
// </div>

// <div style={{
// fontSize:11,
// fontWeight:700,
// color:"#64748b"
// }}>
// {s.label}
// </div>

// </div>
// ))}
// </>
// )
// }

// export default function Hero(){

// useEffect(()=>{
// const style=document.createElement("style");
// style.innerHTML=STYLES;
// document.head.appendChild(style);
// },[])

// return(

// <section
// style={{
// position:"relative",
// minHeight:"100vh",
// display:"flex",
// alignItems:"center",
// overflow:"hidden",
// background:"white",
// padding:"80px 60px"
// }}
// >

// <div className="blob-main"></div>

// {/* curved line */}

// <svg className="curve-bg" viewBox="0 0 1440 800">

// <path
// d="M0 300 Q400 100 800 300 T1440 250"
// stroke="url(#grad)"
// strokeWidth="2"
// fill="none"
// />

// <defs>
// <linearGradient id="grad">
// <stop offset="0%" stopColor="#ff2d7a"/>
// <stop offset="25%" stopColor="#ff7a00"/>
// <stop offset="50%" stopColor="#ffd400"/>
// <stop offset="75%" stopColor="#38d66b"/>
// <stop offset="100%" stopColor="#00a8ff"/>
// </linearGradient>
// </defs>

// </svg>

// <div
// style={{
// maxWidth:1200,
// margin:"0 auto",
// width:"100%",
// display:"grid",
// gridTemplateColumns:"1fr 1fr",
// gap:70,
// alignItems:"center"
// }}
// >

// {/* LEFT */}

// <div>

// <div
// style={{
// display:"inline-flex",
// alignItems:"center",
// gap:8,
// background:"rgba(0,168,255,.1)",
// padding:"8px 20px",
// borderRadius:50,
// marginBottom:25,
// fontWeight:700,
// color:"#00a8ff"
// }}
// >
// 🚀 Enterprise Digital Infrastructure
// </div>

// <h1
// style={{
// fontFamily:"Sora",
// fontSize:56,
// fontWeight:900,
// lineHeight:1.1,
// marginBottom:25
// }}
// >
// Powering the <br/>
// Future of <br/>
// <span className="grad-text">Enterprise IT</span>
// </h1>

// <p
// style={{
// fontSize:17,
// color:"#6b7280",
// lineHeight:1.7,
// marginBottom:35,
// maxWidth:500
// }}
// >
// MV Business Solutions delivers scalable networking,
// cybersecurity, and data infrastructure solutions
// that enable organizations to operate securely and efficiently.
// </p>

// <div style={{display:"flex",gap:15}}>

// <button
// style={{
// background:"linear-gradient(135deg,#ff2d7a,#ff7a00)",
// color:"white",
// border:"none",
// padding:"14px 28px",
// borderRadius:50,
// fontWeight:700,
// display:"flex",
// alignItems:"center",
// gap:8,
// cursor:"pointer"
// }}
// >
// Explore Solutions <Icon.Arrow/>
// </button>

// <button
// style={{
// background:"white",
// border:"2px solid #00a8ff",
// color:"#00a8ff",
// padding:"14px 28px",
// borderRadius:50,
// fontWeight:700,
// display:"flex",
// alignItems:"center",
// gap:8,
// cursor:"pointer"
// }}
// >
// <Icon.Phone/> Talk to Expert
// </button>

// </div>
// </div>

// {/* RIGHT */}

// <div
// style={{
// position:"relative",
// display:"flex",
// alignItems:"center",
// justifyContent:"center"
// }}
// >

// <div className="image-glow"></div>

// <div className="image-box">

// <div className="image-inner">

// <img
// src={heroImage}
// alt="Enterprise IT"
// className="hero-img"
// />

// </div>

// </div>

// <FloatingStats/>

// </div>

// </div>

// </section>

// )
// }




// import { useEffect } from "react";
// import heroImage from "@/assets/hero.png";

// const STYLES = `
// @import url('https://fonts.googleapis.com/css2?family=Sora:wght@700;800;900&family=Nunito:wght@600;700;800&display=swap');

// body{
// font-family:'Nunito',sans-serif;
// overflow-x:hidden;
// }

// /* TOP RIGHT FRAME */

// .hero-frame{
// position:absolute;
// top:0;
// right:0;
// width:55%;
// height:100%;
// background:linear-gradient(135deg,#0f172a,#1e293b,#020617);
// clip-path:polygon(30% 0%,100% 0%,100% 100%,0% 65%);
// z-index:0;
// }

// /* hero content */

// .hero-container{
// position:relative;
// z-index:2;
// }

// /* gradient text */

// .grad-text{
// background:linear-gradient(135deg,#ff2d7a,#ff7a00,#ffd400,#38d66b,#00a8ff);
// -webkit-background-clip:text;
// -webkit-text-fill-color:transparent;
// }

// /* hero image */

// .hero-img{
// width:420px;
// border-radius:14px;
// box-shadow:0 30px 60px rgba(0,0,0,.25);
// }
// `;

// export default function HeroSection(){

// useEffect(()=>{
// const style=document.createElement("style");
// style.innerHTML=STYLES;
// document.head.appendChild(style);
// },[])

// return(

// <section
// style={{
// position:"relative",
// minHeight:"100vh",
// display:"flex",
// alignItems:"center",
// padding:"100px 60px",
// background:"#fff",
// overflow:"hidden"
// }}
// >

// {/* DARK FRAME */}
// <div className="hero-frame"/>

// <div
// className="hero-container"
// style={{
// maxWidth:1200,
// margin:"0 auto",
// width:"100%",
// display:"grid",
// gridTemplateColumns:"1fr 1fr",
// gap:80,
// alignItems:"center"
// }}
// >

// {/* LEFT CONTENT */}

// <div>

// <h1
// style={{
// fontFamily:"Sora",
// fontSize:56,
// fontWeight:900,
// lineHeight:1.1,
// marginBottom:25
// }}
// >
// Powering the <br/>
// Future of <br/>
// <span className="grad-text">Enterprise IT</span>
// </h1>

// <p
// style={{
// fontSize:18,
// color:"#6b7280",
// lineHeight:1.7,
// marginBottom:35,
// maxWidth:500
// }}
// >
// MV Business Solutions delivers scalable networking,
// cybersecurity, and infrastructure systems for
// modern enterprises.
// </p>

// <button
// style={{
// background:"#00a8ff",
// color:"white",
// border:"none",
// padding:"14px 28px",
// borderRadius:40,
// fontWeight:700,
// cursor:"pointer"
// }}
// >
// Explore Solutions
// </button>

// </div>

// {/* RIGHT IMAGE */}

// <div style={{display:"flex",justifyContent:"center"}}>

// <img
// src={heroImage}
// className="hero-img"
// />

// </div>

// </div>

// </section>

// )
// }







// import { WaveTopRight } from "@/components/home/PremiumWaves";
// import heroImage from "@/assets/hero.png";
// import SectionWave from "./SectionWave";

// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center py-28 overflow-hidden bg-white">

//       {/* <WaveTopRight /> */}
//       <SectionWave position="top-right" />

//       <div className="container mx-auto px-6 lg:px-10 relative z-10">

//         <div className="grid lg:grid-cols-2 gap-20 items-center">

//           {/* LEFT */}

//           <div>

//             <span className="text-sm font-semibold text-[#00a8ff] mb-6 block">
//               🚀 Enterprise Digital Infrastructure
//             </span>

//             <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
//               Powering the Future of
//               <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">
//                 {" "}Enterprise IT
//               </span>
//             </h1>

//             <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
//               MV Business Solutions delivers scalable networking,
//               cybersecurity, and infrastructure solutions for
//               modern enterprises.
//             </p>

//             <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg hover:scale-105 transition">
//               Explore Solutions
//             </button>

//           </div>

//           {/* RIGHT IMAGE */}

//           <div className="flex justify-center">

//             <img
//               src={heroImage}
//               className="w-[420px] rounded-2xl shadow-2xl"
//             />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }


// import heroImage from "@/assets/hero.png";
// import PremiumSectionWave from "./PremiumSectionWave";
// import ProfessionalFrame from "./PremiumSectionWave";


// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

//       {/* Premium Background Wave */}
//       <ProfessionalFrame variant="top-right" />

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}

//           <div>

//             <span className="text-sm font-semibold text-blue-500 mb-6 block">
//               🚀 Enterprise Digital Infrastructure
//             </span>

//             <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
//               Powering the Future of
//               <span className="bg-gradient-to-r from-pink-500 via-orange-400 to-blue-500 bg-clip-text text-transparent">
//                 {" "}Enterprise IT
//               </span>
//             </h1>

//             <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">
//               MV Business Solutions delivers scalable networking,
//               cybersecurity and enterprise IT infrastructure for
//               modern businesses.
//             </p>

//             <div className="flex gap-4">

//               <button className="px-8 py-4 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 text-white font-semibold shadow-lg hover:scale-105 transition">
//                 Explore Solutions
//               </button>

//               <button className="px-8 py-4 rounded-full border border-blue-400 text-blue-500 font-semibold hover:bg-blue-50 transition">
//                 Talk to Expert
//               </button>

//             </div>

//           </div>

//           {/* RIGHT IMAGE */}

//           <div className="flex justify-center">

//             <img
//               src={heroImage}
//               alt="Hero"
//               className="w-[420px] rounded-2xl shadow-2xl"
//             />

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }





// import heroImage from "@/assets/hero.png";
// import ModernFrameBackground from "./PremiumSectionWave";


// export default function HeroSection() {
//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

//       <ModernFrameBackground side="right" />

//       <div className="container mx-auto px-6 lg:px-12 relative z-10">

//         <div className="grid lg:grid-cols-2 gap-16 items-center">

//           {/* LEFT CONTENT */}
//           <div>

//             <span className="text-sm font-semibold text-blue-600 mb-6 block">
//               Enterprise Networking Solutions
//             </span>

//             <h1 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">
//               Building Modern
//               <span className="text-blue-600"> IT Infrastructure</span>
//             </h1>

//             <p className="text-gray-600 leading-relaxed mb-8 max-w-lg">
//               We deliver secure networking, scalable systems,
//               and enterprise infrastructure that power modern
//               organizations and digital transformation.
//             </p>

//             <div className="flex gap-4">

//               <button className="px-8 py-4 rounded-full bg-blue-600 text-white font-semibold shadow-lg hover:scale-105 transition">
//                 Explore Services
//               </button>

//               <button className="px-8 py-4 rounded-full border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50 transition">
//                 Contact Us
//               </button>

//             </div>

//           </div>

//           {/* RIGHT IMAGE WITH GLASS CARD */}
//           <div className="flex justify-center">

//             <div className="backdrop-blur-xl bg-white/60 p-6 rounded-2xl shadow-xl border border-gray-100">

//               <img
//                 src={heroImage}
//                 alt="hero"
//                 className="w-[420px] rounded-xl"
//               />

//             </div>

//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




// import heroImage from "@/assets/hero.png";
// import BlobFrameBackground from "./PremiumSectionWave";


// export default function HeroSection() {

//   const stats = [
//     { value: "99.9%", label: "Uptime" },
//     { value: "1240", label: "Threats Blocked" },
//     { value: "847", label: "Active Nodes" },
//   ];

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-white px-6 lg:px-20">

//       <BlobFrameBackground side="right" />

//       <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full max-w-6xl mx-auto">

//         {/* LEFT CONTENT */}

//         <div>

//           <div className="inline-flex items-center gap-2 bg-emerald-100 text-emerald-600 px-5 py-2 rounded-full font-semibold mb-6">
//             🚀 Enterprise Digital Infrastructure
//           </div>

//           <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
//             Powering the Future of
//             <span className="block text-emerald-500">
//               Enterprise IT
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
//             MV Business Solutions delivers scalable networking,
//             cybersecurity, and enterprise infrastructure
//             solutions that power modern organizations.
//           </p>

//           <div className="flex gap-4">

//             <button className="bg-emerald-500 text-white px-7 py-3 rounded-full font-semibold hover:bg-emerald-600 transition">
//               Explore Solutions
//             </button>

//             <button className="border-2 border-emerald-500 text-emerald-600 px-7 py-3 rounded-full font-semibold hover:bg-emerald-50 transition">
//               Talk to Expert
//             </button>

//           </div>

//         </div>

//         {/* RIGHT IMAGE */}

//         <div className="relative flex justify-center">

//           <img
//             src={heroImage}
//             alt="hero"
//             className="w-[420px] rounded-xl"
//           />

//           {/* Floating Stats */}

//           <div className="absolute -top-6 -left-10 bg-white shadow-xl rounded-xl px-4 py-3 text-center">
//             <div className="font-bold text-emerald-500 text-lg">99.9%</div>
//             <div className="text-xs text-gray-500">Uptime</div>
//           </div>

//           <div className="absolute top-24 -right-10 bg-white shadow-xl rounded-xl px-4 py-3 text-center">
//             <div className="font-bold text-red-500 text-lg">1240</div>
//             <div className="text-xs text-gray-500">Threats Blocked</div>
//           </div>

//           <div className="absolute bottom-16 -left-12 bg-white shadow-xl rounded-xl px-4 py-3 text-center">
//             <div className="font-bold text-blue-500 text-lg">847</div>
//             <div className="text-xs text-gray-500">Active Nodes</div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }




// import heroImage from "@/assets/hero.png";
// import BlobFrameBackground from "./PremiumSectionWave";

// export default function HeroSection() {

//   return (
//     <section className="relative min-h-screen flex items-center overflow-hidden bg-white px-6 lg:px-20">

//       <BlobFrameBackground side="right" />

//       <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center w-full max-w-6xl mx-auto">

//         {/* LEFT CONTENT */}

//         <div>

//           <div className="inline-flex items-center gap-2 bg-pink-100 text-pink-600 px-5 py-2 rounded-full font-semibold mb-6">
//             🚀 Enterprise Digital Infrastructure
//           </div>

//           <h1 className="text-5xl lg:text-6xl font-black leading-tight mb-6">
//             Powering the Future of
//             <span className="block bg-gradient-to-r from-pink-500 via-orange-400 via-yellow-300 to-blue-500 bg-clip-text text-transparent">
//               Enterprise IT
//             </span>
//           </h1>

//           <p className="text-gray-600 text-lg leading-relaxed mb-8 max-w-lg">
//             MV Business Solutions delivers scalable networking,
//             cybersecurity, and enterprise infrastructure
//             solutions that power modern organizations.
//           </p>

//           <div className="flex gap-4">

//             <button className="bg-gradient-to-r from-pink-500 via-orange-400 to-yellow-400 text-white px-7 py-3 rounded-full font-semibold hover:opacity-90 transition">
//               Explore Solutions
//             </button>

//             <button className="border-2 border-pink-500 text-pink-600 px-7 py-3 rounded-full font-semibold hover:bg-pink-50 transition">
//               Talk to Expert
//             </button>

//           </div>

//         </div>

//         {/* RIGHT IMAGE */}

//         <div className="relative flex justify-center">

//           <img
//             src={heroImage}
//             alt="hero"
//             className="w-[420px] rounded-xl"
//           />

//           {/* Floating Stats */}

//           <div className="absolute -top-6 -left-10 bg-white shadow-xl rounded-xl px-4 py-3 text-center">
//             <div className="font-bold text-pink-500 text-lg">99.9%</div>
//             <div className="text-xs text-gray-500">Uptime</div>
//           </div>

//           <div className="absolute top-24 -right-10 bg-white shadow-xl rounded-xl px-4 py-3 text-center">
//             <div className="font-bold text-orange-500 text-lg">1240</div>
//             <div className="text-xs text-gray-500">Threats Blocked</div>
//           </div>

//           <div className="absolute bottom-16 -left-12 bg-white shadow-xl rounded-xl px-4 py-3 text-center">
//             <div className="font-bold text-blue-500 text-lg">847</div>
//             <div className="text-xs text-gray-500">Active Nodes</div>
//           </div>

//         </div>

//       </div>

//     </section>
//   );
// }