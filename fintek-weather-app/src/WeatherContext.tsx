import React, { createContext, useContext, useState, ReactNode } from 'react';
import { WeatherApiResponse, ForecastApiResponse } from './Types';

interface WeatherContextType {
  weatherData: WeatherApiResponse | null;
  setWeatherData: React.Dispatch<React.SetStateAction<WeatherApiResponse | null>>;
  forecastData: ForecastApiResponse | null;
  setForecastData: React.Dispatch<React.SetStateAction<ForecastApiResponse | null>>;
}

const WeatherContext = createContext<WeatherContextType | undefined>(undefined);

export const WeatherProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [weatherData, setWeatherData] = useState<WeatherApiResponse | null>(null);
  const [forecastData, setForecastData] = useState<ForecastApiResponse | null>(null);

  return (
    <WeatherContext.Provider value={{ weatherData, setWeatherData, forecastData, setForecastData }}>
      {children}
    </WeatherContext.Provider>
  );
};

export const useWeatherContext = () => {
  const context = useContext(WeatherContext);
  if (context === undefined) {
    throw new Error('useWeatherContext must be used within a WeatherProvider');
  }
  return context;
};
