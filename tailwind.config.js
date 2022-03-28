module.exports = {
  mode:"jit",
  content: [],
  purge:[
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      colors:{
        mainHeader:'#222',
        pargraph:"#465b52",
        navColor:"#1a1a1a",
        greenColor:"#088178",
        pink:"#E3E6F3"
      }
    },
  },
  plugins: [],
}
