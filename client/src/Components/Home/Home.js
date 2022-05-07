import React, {useEffect, useState} from "react"
import Styles from "./Home.module.css"
import Card from "../Cards/Cards"
import AddCard from "../Cards/NewCard"
import Adder from "../Cards/AdderCard"
import axios from "axios"

const Home = ({userName,name})=>{

    const [change,setchange] = useState(false)
    const [LinksList,setLinksList] = useState([])

    const [AdderCard, setAdderCard] = useState(false)

    const showAdderCard = ()=>{
        if(AdderCard === true){
            alert("first add this link");
        }else{
            setAdderCard(true);
        }
    }

    const hideAdderCard = ()=>{
        setAdderCard(false);
    }

    useEffect(()=>{
        axios.get(`/api/getLinks/${userName}/${name}`).then(res=>{
            setLinksList(res.data)
            console.log(res.data)
        });
    },[userName,name,change])


    return(
        <div className={Styles.majorContainer}>
            {
                LinksList.map((data,idx)=>
                    <Card key={idx} data={data} change={change} setchange={setchange}/>
                )
            }
            {
                AdderCard &&
                    <Adder hideAdderCard={hideAdderCard} change={change} setchange={setchange}/>
            }
            <AddCard showAdderCard={showAdderCard} hideAdderCard={hideAdderCard} change={change} setchange={setchange}/>
        </div>
    )
}

export default Home;