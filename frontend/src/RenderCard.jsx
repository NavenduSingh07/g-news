import React, { useEffect, useState } from "react";
import axios from 'axios'
import CardComponent from "./Components/Card.component";
import SkeletonComponent from "./Components/Skeleton";
import { ChakraProvider, CSSReset, Box,Text } from "@chakra-ui/react";
import DelayedModal from "./Components/DelayedModal";


const RenderCard = (search, from, Page) => {

 
  const [data, setData] = useState(null)
  const [isModalOpen, setModalOpen] = useState(false);
 const NoOfSkeleton = [1,2,3,4,5,6,7,8,9,10]
  useEffect(() => {
    /** Fetching Data From News API */
    async function fetch(){
      try {
        const { data } = await axios.get(`https://nutty-cape-bee.cyclic.app/News?search=Solar&from=2024-01-22&Page=1`)
        console.log(data);
        setData(data.articles);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
  
    }

 let timeID = setTimeout(()=>{
      fetch()
    },1200)
   
    // Set a timeout to open the modal after 10 seconds
    const modalTimeout = setTimeout(() => {
      setModalOpen(true);
    }, 5000);

    // Clear the timeout when the component unmounts
   
    return (()=>{
      clearTimeout(timeID)
      clearTimeout(modalTimeout);

    })
  }, []);

  const closeModal = () => {
    setModalOpen(false);
  };

  

  return (
    <div style={{ paddingLeft: '20px', paddingRight: '20px' }}>
      <ChakraProvider>
        <CSSReset />
        <Box>
          {/* Your main content goes here */}
          <p></p>

          {/* Render the DelayedModal component */}
          <DelayedModal isOpen={isModalOpen} onClose={closeModal} />
        </Box>
      </ChakraProvider>
      <Text>sdhgc</Text>

      {data ? (
        data.map((card, i) => (
          <CardComponent
            imageSrc={`https://www.hindustantimes.com/ht-img/img/2023/03/22/550x309/Black_and_silver_solar_panels_1676005255798_1679523955977_1679523955977.jpg`}
            header={card.title}
            source={card.source.name}
            date={card.publishedAt}
            url={card.url}
            author={card.author}
            key={i}
          />
        ))
      ) : (
        // Use SkeletonComponent for each iteration in NoOfSkeleton array
      
        NoOfSkeleton.map((_, index) => (
          <SkeletonComponent key={index} />
        ))
      )}
    </div>
  );
};

export default RenderCard;