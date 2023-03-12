import React from 'react'
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  const footer = {
    box: 'text-md text-center flex justify-center items-center gap-4 p-4',
    github:'hover:scale-105 transition-all cursor-pointer'
  }
  return (
    <div className={footer.box}>
        <p>Copyright © 2023 Noxplit</p>
        <GitHubIcon className={footer.github}/>
    </div>
  )
}

export default Footer