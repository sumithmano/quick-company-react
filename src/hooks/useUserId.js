export default function useUserName() {
  const [isPresent, setIsPresent] = useState(false);
  
  useEffect(() => {
    const data = MockedApi.fetchData();
    data.then((res) => {
      res.forEach((e) => {
        if (e.name === userName) {
          setIsPresent(true);
        }
     });
    });
  });
    
  return isPresent;
}