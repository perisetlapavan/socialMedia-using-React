import {Box} from '@mui/material'
import React from 'react' ;import Post from './Post';
;



const Feed = () => {
  return (
     //   box is present in layout in material ui 
    <Box  flex={4} p={2}>
      <Post about="akhanda success"
            date="January 19, 2021"
            src="https://t2blive.com/wp-content/uploads/2022/01/ftuj-ftiju-e1642691583254.jpg"
            info="thanks to my fans and audience.bless you all."/>
      <Post about="thaman" 
            date="November 27, 2021"
            src="https://ntvenglish.com/wp-content/uploads/2021/11/Thaman-says-Akhanda-is-a-blockbuster-696x522.jpg"
            info="Thaman has given a rousing bgm for my film.it will be a treat for my fans"/>
      <Post about="allu arjun"
            date="November 27, 2021"
            src="https://www.mirchi9.com/wp-content/uploads/2022/01/Allu-Arjun-and-Balakrishna-Collaborating-For-A-Multistarrer.jpg"
            info="thanks for gracing my audio launch @alluarjun"/>
      <Post about="unstoppable show"
            date="November 4, 2021"
            src="https://images.news18.com/ibnlive/uploads/2022/02/untitled-design-1-61-16438879553x2.png?impolicy=website"
            info="my new Stinct as anchor. let's see."/>
      <Post about="Liger"
            date="October 12, 2021"
            src="https://st1.bollywoodlife.com/wp-content/uploads/2021/09/Vijay-Deverakonda-and-Nandamuri-Balakrishna.jpg"
            info="met jagan and his team in liger sets.all the best to the team"/>
      <Post about="akhanda"
            date="March 4,2021"
            src="https://assets.thehansindia.com/h-upload/2022/01/18/1195496-akhanda.webp"
            info="me and Pragya Jaiswal played the lead roles in the new Telugu film Akhanda. 
            Boyapati Srinu is the film's director. The film is bankrolled by Dwaraka Creations"/>
    </Box>
  )
}

export default Feed