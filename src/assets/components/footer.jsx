export default function Footer(){
    return(
        
      
        <footer className="bg-[#222] text-white py-8 absolute mb-0">
  <div className="container mx-auto flex flex-wrap justify-between items-center pl-36">
   
    <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0">
      
      <p className="mt-4 text-gray-400">
        The Chandigarh Group of Colleges Events Hub is your go-to platform for all campus activities. Stay informed and get involved in the vibrant campus life.
      </p>
    </div>
    
        
    <div className="w-full md:w-1/3 text-center md:text-left mb-6 md:mb-0 pl-32">
      <h4 className="text-xl font-bold mb-4">Quick Links</h4>
      <ul className="space-y-2">
        <li><a href="#about" className="hover:underline">About Us</a></li>
        <li><a href="#events" className="hover:underline">Events</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
        <li><a href="#faq" className="hover:underline">FAQ</a></li>
      </ul>
    </div>

   
    <div className="w-full md:w-1/3 text-center md:text-left pl-10">
      <h4 className="text-xl font-bold mb-4">Connect with Us</h4>
      <div className="flex justify-center md:justify-start space-x-4 mb-4">
        <a href="https://facebook.com" target="_blank">
         
        </a>
        <a href="https://twitter.com" target="_blank">
         
        </a>
        <a href="https://instagram.com" target="_blank">
          
        </a>
        <a href="https://linkedin.com" target="_blank">
          
        </a>
      </div>
      <p className="text-gray-400">
        <i className="fas fa-envelope"></i> <a href="mailto:events@college.edu" className="hover:underline">events@college.edu</a>
      </p>
    </div>
  </div>

 
  <div className="border-t border-gray-700 mt-8 pt-4 text-center ">
    <p className="text-gray-500">&copy; 2024 Chandigarh Group of Colleges Events Hub. All rights reserved.</p>
  </div>
</footer>

       
        
    )
}
