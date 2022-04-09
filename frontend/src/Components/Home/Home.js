import React, {useEffect, useState} from "react"
import Styles from "./Home.module.css"
import Card from "../Cards/Cards"
import AddCard from "../Cards/NewCard"
import Adder from "../Cards/AdderCard"
import axios from "axios"

const Home = (props)=>{


    const userEmail = localStorage.getItem('userEmail')
    if(!userEmail){
        window.location.replace('/login')
    }
    
    const {
        linkList,
        loadLinks,
        userName
    } = props;

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

    useEffect(async()=>{
        loadLinks()

        // const response = await 
        // eslint-disable-next-line
    },[])

    const submit = (name, link)=>{
        const data = {
            name:name,
            link:link,
            userName:userName
        }

        //api call for data response
        
        loadLinks()
        console.log(data);
    }
    return(
        <div className={Styles.majorContainer}>
            {
                linkList.map(()=>
                    <Card />
                )
            }
            {
                AdderCard &&
                    <Adder hideAdderCard={hideAdderCard} submit={submit} />
            }
            <AddCard showAdderCard={showAdderCard} hideAdderCard={hideAdderCard}/>
        </div>
    )
}

export default Home;