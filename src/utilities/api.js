export const fetchCovidData = () => {
    const covidData = {
        "totalCases": 1865827,
        "activeCases": 437696,
        "recoveredCases": 1375431,
        "deaths": 55700,
        "states": [
          {
            "name": "Andhra Pradesh",
            "totalCases": 81234,
            "activeCases": 21543,
            "recoveredCases": 57230,
            "deaths": 2461,
            "location": { "lat": 15.9129, "lng": 79.7400 }
          },
          {
            "name": "Arunachal Pradesh",
            "totalCases": 3125,
            "activeCases": 523,
            "recoveredCases": 2501,
            "deaths": 101,
            "location": { "lat": 28.2180, "lng": 94.7278 }
          },
          {
            "name": "Assam",
            "totalCases": 52471,
            "activeCases": 12563,
            "recoveredCases": 38875,
            "deaths": 1033,
            "location": { "lat": 26.2006, "lng": 92.9376 }
          },
          {
            "name": "Bihar",
            "totalCases": 67842,
            "activeCases": 14231,
            "recoveredCases": 50981,
            "deaths": 1630,
            "location": { "lat": 25.0961, "lng": 85.3131 }
          },
          {
            "name": "Chhattisgarh",
            "totalCases": 43121,
            "activeCases": 11007,
            "recoveredCases": 30547,
            "deaths": 1567,
            "location": { "lat": 21.2787, "lng": 81.8661 }
          },
          {
            "name": "Goa",
            "totalCases": 13472,
            "activeCases": 2432,
            "recoveredCases": 10631,
            "deaths": 409,
            "location": { "lat": 15.2993, "lng": 74.1240 }
          },
          {
            "name": "Gujarat",
            "totalCases": 88976,
            "activeCases": 19347,
            "recoveredCases": 66783,
            "deaths": 2846,
            "location": { "lat": 22.2587, "lng": 71.1924 }
          },
          {
            "name": "Haryana",
            "totalCases": 56412,
            "activeCases": 13487,
            "recoveredCases": 41005,
            "deaths": 1920,
            "location": { "lat": 29.0588, "lng": 76.0856 }
          },
          {
            "name": "Himachal Pradesh",
            "totalCases": 14563,
            "activeCases": 2432,
            "recoveredCases": 11783,
            "deaths": 348,
            "location": { "lat": 31.1048, "lng": 77.1734 }
          },
          {
            "name": "Jharkhand",
            "totalCases": 24763,
            "activeCases": 5821,
            "recoveredCases": 18051,
            "deaths": 891,
            "location": { "lat": 23.6102, "lng": 85.2799 }
          },
          {
            "name": "Karnataka",
            "totalCases": 111237,
            "activeCases": 28476,
            "recoveredCases": 79436,
            "deaths": 3325,
            "location": { "lat": 15.3173, "lng": 75.7139 }
          },
          {
            "name": "Kerala",
            "totalCases": 92342,
            "activeCases": 20183,
            "recoveredCases": 69328,
            "deaths": 2831,
            "location": { "lat": 10.8505, "lng": 76.2711 }
          },
          {
            "name": "Madhya Pradesh",
            "totalCases": 62345,
            "activeCases": 16321,
            "recoveredCases": 44097,
            "deaths": 1927,
            "location": { "lat": 22.9734, "lng": 78.6569 }
          },
          {
            "name": "Maharashtra",
            "totalCases": 311237,
            "activeCases": 73547,
            "recoveredCases": 226398,
            "deaths": 11292,
            "location": { "lat": 19.7515, "lng": 75.7139 }
          },
          {
            "name": "Manipur",
            "totalCases": 13412,
            "activeCases": 2319,
            "recoveredCases": 10789,
            "deaths": 304,
            "location": { "lat": 24.6637, "lng": 93.9063 }
          },
          {
            "name": "Meghalaya",
            "totalCases": 8239,
            "activeCases": 1537,
            "recoveredCases": 6498,
            "deaths": 204,
            "location": { "lat": 25.4670, "lng": 91.3662 }
          },
          {
            "name": "Mizoram",
            "totalCases": 4632,
            "activeCases": 739,
            "recoveredCases": 3802,
            "deaths": 91,
            "location": { "lat": 23.1645, "lng": 92.9376 }
          },
          {
            "name": "Nagaland",
            "totalCases": 5728,
            "activeCases": 1093,
            "recoveredCases": 4491,
            "deaths": 144,
            "location": { "lat": 26.1584, "lng": 94.5624 }
          },
          {
            "name": "Odisha",
            "totalCases": 76542,
            "activeCases": 17432,
            "recoveredCases": 57628,
            "deaths": 1482,
            "location": { "lat": 20.9517, "lng": 85.0985 }
          },
          {
            "name": "Punjab",
            "totalCases": 48612,
            "activeCases": 12987,
            "recoveredCases": 34326,
            "deaths": 1299,
            "location": { "lat": 31.1471, "lng": 75.3412 }
          },
          {
            "name": "Rajasthan",
            "totalCases": 75218,
            "activeCases": 17834,
            "recoveredCases": 55719,
            "deaths": 1665,
            "location": { "lat": 27.0238, "lng": 74.2179 }
          },
          {
            "name": "Sikkim",
            "totalCases": 3217,
            "activeCases": 627,
            "recoveredCases": 2536,
            "deaths": 54,
            "location": { "lat": 27.5330, "lng": 88.5122 }
          },
          {
            "name": "Tamil Nadu",
            "totalCases": 103489,
            "activeCases": 24327,
            "recoveredCases": 76854,
            "deaths": 3308,
            "location": { "lat": 11.1271, "lng": 78.6569 }
          },
          {
            "name": "Telangana",
            "totalCases": 64723,
            "activeCases": 16398,
            "recoveredCases": 47102,
            "deaths": 1223,
            "location": { "lat": 18.1124, "lng": 79.0193 }
          },
          {
            "name": "Tripura",
            "totalCases": 8247,
            "activeCases": 1642,
            "recoveredCases": 6463,
            "deaths": 142,
            "location": { "lat": 23.9408, "lng": 91.9882 }
          },
          {
            "name": "Uttar Pradesh",
            "totalCases": 116327,
            "activeCases": 28471,
            "recoveredCases": 85321,
            "deaths": 3535,
            "location": { "lat": 26.8467, "lng": 80.9462 }
          },
          {
            "name": "Uttarakhand",
            "totalCases": 24365,
            "activeCases": 5831,
            "recoveredCases": 17651,
            "deaths": 883,
            "location": { "lat": 30.0668, "lng": 79.0193 }
          },
          {
            "name": "West Bengal",
            "totalCases": 92513,
            "activeCases": 21457,
            "recoveredCases": 68032,
            "deaths": 3024,
            "location": { "lat": 22.9868, "lng": 87.8550 }
          },
          {
            "name": "Andaman and Nicobar Islands",
            "totalCases": 2398,
            "activeCases": 627,
            "recoveredCases": 1703,
            "deaths": 68,
            "location": { "lat": 11.7401, "lng": 92.6586 }
          },
          {
            "name": "Chandigarh",
            "totalCases": 5921,
            "activeCases": 1473,
            "recoveredCases": 4267,
            "deaths": 181,
            "location": { "lat": 30.7333, "lng": 76.7794 }
          },
          {
            "name": "Dadra and Nagar Haveli and Daman and Diu",
            "totalCases": 3128,
            "activeCases": 732,
            "recoveredCases": 2351,
            "deaths": 45,
            "location": { "lat": 20.3974, "lng": 72.8328 }
          },
          {
            "name": "Delhi",
            "totalCases": 145738,
            "activeCases": 29843,
            "recoveredCases": 113546,
            "deaths": 4349,
            "location": { "lat": 28.7041, "lng": 77.1025 }
          },
          {
            "name": "Lakshadweep",
            "totalCases": 1321,
            "activeCases": 321,
            "recoveredCases": 985,
            "deaths": 15,
            "location": { "lat": 10.5669, "lng": 72.6410 }
          },
          {
            "name": "Puducherry",
            "totalCases": 9321,
            "activeCases": 2431,
            "recoveredCases": 6745,
            "deaths": 145,
            "location": { "lat": 11.9416, "lng": 79.8083 }
          },
          {
            "name": "Ladakh",
            "totalCases": 4129,
            "activeCases": 928,
            "recoveredCases": 3120,
            "deaths": 81,
            "location": { "lat": 34.1526, "lng": 77.5770 }
          },
          {
            "name": "Jammu and Kashmir",
            "totalCases": 25467,
            "activeCases": 6734,
            "recoveredCases": 17856,
            "deaths": 877,
            "location": { "lat": 33.7782, "lng": 76.5762 }
          }
        ]
    }      
      
    return new Promise((res,rej) => {
        // Set 2 second timeout for showing the loader
        setTimeout(()=>{
            res(covidData);
        }, 2000);
    })
};