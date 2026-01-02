import React from 'react'
import Card from './component/Card';
const App = () => {
  const jobOpenings = [
  {
    companyLogo: "https://imgs.search.brave.com/R2sy_8tEyN3xPSljdMF5DQbFsamUITQiFoSp9E2WKZA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTAv/ODE2LzgwOS9zbWFs/bC9hbWF6b24tdHJh/bnNwYXJlbnQtaWNv/bi1mcmVlLXBuZy5w/bmc",
    companyName: "Amazon",
    jobTitle: "Software Developer",
    tag1: "Full Time",
    tag2: "Junior Level",
    location: "Bangalore",
    pay: "$40/hr",
    jobTime: "2 days ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/CU07Rj_DG26UH49RAQB93d0qf0dTvkraUQ_7df5Oruc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDIv/MTY1LzgxNi9zbWFs/bC9nb29nbGUtbG9n/by10cmFuc3BhcmVu/dC1mcmVlLXBuZy5w/bmc",
    companyName: "Google",
    jobTitle: "Frontend Engineer",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Hyderabad",
    pay: "$55/hr",
    jobTime: "5 days ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/WHlEEiW1lJiRZFulcHzPa_sc-9l2iXvLXkGqG-15-pE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMDYv/ODkyLzY4Mi9zbWFs/bC9taWNyb3NvZnQt/bG9nby1pY29uLWVk/aXRvcmlhbC1mcmVl/LXZlY3Rvci5qcGc",
    companyName: "Microsoft",
    jobTitle: "Backend Developer",
    tag1: "Remote",
    tag2: "Senior Level",
    location: "Remote",
    pay: "$65/hr",
    jobTime: "1 week ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/vMfzHDiz0h4ZpP6ChNqHNfuinTvd3fi7eELqjwf3ouA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvcHJl/dmlld3MvMDU0LzY1/MC84MDIvbm9uXzJ4/L2ZsaXBrYXJ0LWxv/Z28tcm91bmRlZC1m/bGlwa2FydC1sb2dv/LWZyZWUtZG93bmxv/YWQtZmxpcGthcnQt/bG9nby1mcmVlLXBu/Zy5wbmc",
    companyName: "Flipkart",
    jobTitle: "React Developer",
    tag1: "Contract",
    tag2: "Mid Level",
    location: "Bangalore",
    pay: "$45/hr",
    jobTime: "3 days ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/FW_wA_VXS5VF-3aQI4-yZsWsS1Vqv2kN7iv1pot0-UU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zZWVr/bG9nby5jb20vaW1h/Z2VzL1QvVENTLWxv/Z28tRUYxRTNDMUI0/QS1zZWVrbG9nby5j/b20ucG5n",
    companyName: "TCS",
    jobTitle: "Software Engineer",
    tag1: "Full Time",
    tag2: "Fresher",
    location: "Pune",
    pay: "$20/hr",
    jobTime: "2 weeks ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/H56WVpTLn8p7LSGYsInyCzliVg0BGFx0F4yWZrUCrsc/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/aWNvbnNjb3V0LmNv/bS9pY29uL2ZyZWUv/cG5nLTI1Ni9mcmVl/LWluZm9zeXMtbG9n/by1pY29uLXN2Zy1k/b3dubG9hZC1wbmct/MjM3MDc4My5wbmc_/Zj13ZWJwJnc9MjU2",
    companyName: "Infosys",
    jobTitle: "System Engineer",
    tag1: "Full Time",
    tag2: "Entry Level",
    location: "Mysore",
    pay: "$18/hr",
    jobTime: "1 week ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/sATJuZRr6omcO63u30A6cOtlJxh5gkb_0VDIbEX2CDk/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4u/YnJhbmRmZXRjaC5p/by9pZFQ5eFl4dm0w/L3cvODAwL2gvODAw/L3RoZW1lL2Rhcmsv/aWNvbi5qcGVnP2M9/MWJ4aWQ2NE11cDdh/Y3pld1NBWU1YJnQ9/MTc1OTE2MDU0Njc3/MA",
    companyName: "Accenture",
    jobTitle: "Full Stack Developer",
    tag1: "Hybrid",
    tag2: "Mid Level",
    location: "Gurgaon",
    pay: "$35/hr",
    jobTime: "4 days ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/c_JCSp-uGcmwZBL_Owg4FCsaaxAQSMc0SBoWA7PIeQU/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MDJlNjVmMjdiNWI1/NzAwMDQ4YTRhYTQu/cG5n",
    companyName: "Zomato",
    jobTitle: "UI Engineer",
    tag1: "Remote",
    tag2: "Senior Level",
    location: "Delhi",
    pay: "$50/hr",
    jobTime: "6 days ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/cf_inUxRoQw0RhSDrrliKf0YC_uPhflC7qV8zTNx37A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wMTkv/OTA5LzY0MS9zbWFs/bC9wYXl0bS10cmFu/c3BhcmVudC1wYXl0/bS1mcmVlLWZyZWUt/cG5nLnBuZw",
    companyName: "Paytm",
    jobTitle: "Mobile App Developer",
    tag1: "Full Time",
    tag2: "Mid Level",
    location: "Noida",
    pay: "$38/hr",
    jobTime: "3 weeks ago"
  },
  {
    companyLogo: "https://imgs.search.brave.com/J4Ai9tBwwpn8MCRie_DPlBNScwd9zymjg6BZEl4KEro/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/bG9nb3NoYXBlLmNv/bS93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NC8wOC93aXByby12/ZWN0b3ItbG9nb19s/b2dvc2hhcGUuY29t/Xy5wbmc",
    companyName: "Wipro",
    jobTitle: "Java Developer",
    tag1: "Part Time",
    tag2: "Senior Level",
    location: "Mumbai",
    pay: "$30/hr",
    jobTime: "5 days ago"
    }
  ];




  return (
    <div className='parent'>
      {jobOpenings.map(function(elem,idx){
        
        return <div key={idx}>
          <Card key={idx} company={elem.companyName}  day={elem.jobTime} level={elem.jobTitle} tag1={elem.tag1} tag2={elem.tag2} location={elem.location} pay={elem.pay} logo={elem.companyLogo}/>
        </div>
      })}
      
    </div>
  )
}

export default App
