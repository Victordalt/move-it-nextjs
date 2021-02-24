import '../styles/global.css';



function MyApp({ Component, pageProps }) {
  //Colocar aqui tudo que NAO MUDA na aplicacao. Ex: Sidebar, navbar.
  return <Component {...pageProps} />
}

export default MyApp
