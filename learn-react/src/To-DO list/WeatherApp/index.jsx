import { useQuery } from '@tanstack/react-query';
const fetchWeather = async () => {
    const key=import.meta.env.VITE_WEATHER_APP_KEY;
  const result = await fetch(
    `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/india?unitGroup=us&key=${key}&contentType=json`
  );
  if (!result.ok) {
    throw new Error('Failed to fetch wreather data');
  }
  const data = await result.json();
  console.log(data);
  return data;
};

export default function WeatherApp() {
  const {
    data: weather,
    isLoading,
    isError,
    error
  } = useQuery({
    queryKey: ['weather'],
    queryFn: fetchWeather
  });

  if (isLoading) return <p className='text-red-500'> Loading weather....</p>;
  if (isError) return <p>Error:{error.message}</p>;
  return (
      <div className='min-h-screen flex items-center justify-center w-screen bg-blue-100'>
        <div className='border border-black p-10'>
         {weather &&( <div>
                                  <p>{weather.currentConditions.datetime}</p>
                                  <p>{weather.address}</p>
                      </div>)}
    </div>
 </div>
  );
}
