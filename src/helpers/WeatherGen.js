export const WeatherGen = function weatherGen() {

    const wPatterns = [ // repeated patterns added to increase probability of random selection
        'Sunny/Clear', 'Sunny/Clear','Sunny/Clear','Sunny/Clear','Sunny/Clear','Sunny/Clear','Sunny/Clear','Sunny/Clear',
        'Partially cloudy', 'Partially cloudy','Partially cloudy','Partially cloudy','Partially cloudy','Partially cloudy','Partially cloudy',
        'Cloudy', 'Cloudy','Cloudy','Cloudy','Cloudy','Cloudy',
        'Overcast', 'Overcast', 'Overcast', 'Overcast', 'Overcast', 
        'Drizzle', 'Drizzle', 'Drizzle', 'Drizzle', 
        'Rain', 'Rain', 'Rain',
        'Stormy', 'Stormy',
        'Snow'
        
    ]

    function selectPattern() {
        const i = Math.floor(Math.random() * (35 + 1))
        return wPatterns[i]
    }

    return selectPattern()
}