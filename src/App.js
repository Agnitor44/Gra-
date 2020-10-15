  import React, {useState, useEffect} from 'react';

  import './App.css';

  export const render = () => {
   
    const mapa = []
    for(let j = 0; j<10; j++ ) {
    
  for(let i = 0; i<10; i++ )
  {
    const skaly = Math.floor(Math.random() * 100)
    const end = Math.floor(Math.random() * 200)
    let losu = ''
    if(skaly>70) {
      losu = 'skaly'
    }
    if(end < 5){
      losu = 'end'
    }
    
    
    const kolumna = {
      kolumna: i,
      rzad: j,
      is: false,
      type: losu
    }
    mapa.push(kolumna)
  }
    
    }
    let skaly = 0
    let puste = 0
    let end = 0
    mapa.forEach(item => {
        if(item.type === 'skaly') skaly++
     
    }
      )
      const obiekt = {
        mapa: mapa,
        skaly:skaly,
       
      }

    
 
  return obiekt

  }
  


  function App() {
    const mapa = render()
    const newMap = mapa.mapa
    const skala = mapa.skaly
    
  const [map, setMap] = useState(newMap)
  const [me, setMe] = useState({x: 0, y: 0})
  const [previos, setPrevios] = useState(0)
  let [end, setEnd] = useState(false)
  let [pkt, setPkt] = useState(skala)
  let [koniec, setKoniec] = useState(pkt)
const clear = () => {
  const mapa = render()
    const newMap = mapa.mapa
    const skala = mapa.skaly
    
  setMap(newMap)
  setMe({x: 0, y: 0})
  setPrevios(0)
 setEnd(false)
  setPkt(skala)
  setKoniec(skala)
}
 
  const move = (e) => {
   
    
  if(e.target.name === 'up'){
    if(me.y > 0){
      const ne = --me.y
    
      setMe({...me, y: ne })
    }
  }
  else if(e.target.name === 'down'){
    if(me.y <9){
    const ne = ++me.y
  
  setMe({...me, y: ne })
    }
  }
  else if(e.target.name === 'left'){
    if(me.x > 0){
    const ne = --me.x

    setMe({...me, x: ne })
    }
  }
  else if(e.target.name === 'right'){
    if(me.x <9){
    const ne = ++me.x

    
            setMe({...me, x: ne })
    }
  }
  const id = map.findIndex(item => item.rzad === me.y&& item.kolumna === me.x)
  
  if(map[id].type === 'skaly'){
    const zostalo = --koniec
    setKoniec(zostalo)
  } 
  if(map.length > 230 || map[id].type === 'end')
  {
    clear()
    return
    

  }
  if(koniec === 0) {
    clear()
    return
  }

  if(previos !== id){
  setMap( [...map, map[id].type = 'me'])

  setMap([...map, map[previos].type = ''])

  setPrevios(id)
  }


  }









    return (
       
      <div className="App">
        <div className = 'controls'>
        
        <button name = 'up' onClick = {move}>Up</button>
        <button name = 'down' onClick = {move}>Down</button>
        <button name = 'left' onClick = {move}>Left</button>
        <button name = 'right' onClick = {move}>Right</button>
        </div>
        <div className = 'game'>
        <div className={map[0].type}></div>
        <div className={map[1].type}></div>
        <div className={map[2].type}></div>
        <div className={map[3].type}></div>
        <div className={map[4].type}></div>
        <div className={map[5].type}></div>
        <div className={map[6].type}></div>
        <div className={map[7].type}></div>
        <div className={map[8].type}></div>
        <div className={map[9].type}></div>
        <div className={map[10].type}></div>
        <div className={map[11].type}></div>
        <div className={map[12].type}></div>
        <div className={map[13].type}></div>
        <div className={map[14].type}></div>
        <div className={map[15].type}></div>
        <div className={map[16].type}></div>
        <div className={map[17].type}></div>
        <div className={map[18].type}></div>
        <div className={map[19].type}></div>
        <div className={map[20].type}></div>
        <div className={map[21].type}></div>
        <div className={map[22].type}></div>
        <div className={map[23].type}></div>
        <div className={map[24].type}></div>
        <div className={map[25].type}></div>
        <div className={map[26].type}></div>
        <div className={map[27].type}></div>
        <div className={map[28].type}></div>
        <div className={map[29].type}></div>
        <div className={map[30].type}></div>
        <div className={map[31].type}></div>
        <div className={map[32].type}></div>
        <div className={map[33].type}></div>
        <div className={map[34].type}></div>
        <div className={map[35].type}></div>
        <div className={map[36].type}></div>
        <div className={map[37].type}></div>
        <div className={map[38].type}></div>
        <div className={map[39].type}></div>
        <div className={map[40].type}></div>
        <div className={map[41].type}></div>
        <div className={map[42].type}></div>
        <div className={map[43].type}></div>
        <div className={map[44].type}></div>
        <div className={map[45].type}></div>
        <div className={map[46].type}></div>
        <div className={map[47].type}></div>
        <div className={map[48].type}></div>
        <div className={map[49].type}></div>
        <div className={map[50].type}></div>
        <div className={map[51].type}></div>
        <div className={map[52].type}></div>
        <div className={map[53].type}></div>
        <div className={map[54].type}></div>
        <div className={map[55].type}></div>
        <div className={map[56].type}></div>
        <div className={map[57].type}></div>
        <div className={map[58].type}></div>
        <div className={map[59].type}></div>
        <div className={map[60].type}></div>
        <div className={map[61].type}></div>
        <div className={map[62].type}></div>
        <div className={map[63].type}></div>
        <div className={map[64].type}></div>
        <div className={map[65].type}></div>
        <div className={map[66].type}></div>
        <div className={map[67].type}></div>
        <div className={map[68].type}></div>
        <div className={map[69].type}></div>
        <div className={map[70].type}></div>
        <div className={map[71].type}></div>
        <div className={map[72].type}></div>
        <div className={map[73].type}></div>
        <div className={map[74].type}></div>
        <div className={map[75].type}></div>
        <div className={map[76].type}></div>
        <div className={map[77].type}></div>
        <div className={map[78].type}></div>
        <div className={map[79].type}></div>
        <div className={map[80].type}></div>
        <div className={map[81].type}></div>
        <div className={map[82].type}></div>
        <div className={map[83].type}></div>
        <div className={map[84].type}></div>
        <div className={map[85].type}></div>
        <div className={map[86].type}></div>
        <div className={map[87].type}></div>
        <div className={map[88].type}></div>
        <div className={map[89].type}></div>
        <div className={map[90].type}></div>
        <div className={map[91].type}></div>
        <div className={map[92].type}></div>
        <div className={map[93].type}></div>
        <div className={map[94].type}></div>
        <div className={map[95].type}></div>
        <div className={map[96].type}></div>
        <div className={map[97].type}></div>
        <div className={map[98].type}></div>
        <div className={map[99].type}></div>
        

      </div>
      </div>
      
    ) 
  }

  export default App;
