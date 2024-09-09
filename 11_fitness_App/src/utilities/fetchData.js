export  const exerciseOptions = {
  method: 'GET',
  url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
  headers: {
    'X-RapidAPI-Key': '89a42702d1msh30c298572428858p1a0603jsn341220b99439',
    'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
  }
  };
export const fetchData = async(url,options)=>{
    const response = await fetch(url,options);
    const data=await response.json();

    return data;
}