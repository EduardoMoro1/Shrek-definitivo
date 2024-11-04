async function redesSociaisFavoritasMinhaEscola() {
    const url = 'https://docs.google.com/spreadsheets/d/17aggiWJD2fjHorbMzIxxGSFRdrID5_I4nFdqiISK7u8/edit?resourcekey=&gid=686214740#gid=686214740'
    const res = await fetch(url)
    const dados = await res.json()

    const redesSociais = dados.slice(1).map(redes => redes[1])
    console.log(redesSociais)
}

redesSociaisFavoritasMinhaEscola()