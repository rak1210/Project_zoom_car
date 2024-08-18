import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { Box, Button, Center, Flex, Heading, Image, Input, Text, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import '../styles/Dashboard.css'; // Add CSS for styling

//import firstimg from "../img/firstimg.jpg";
import secimg from "../img/secimg.jpg";
import secimg2 from "../img/secimg2.png";

function Dashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [searchCategory, setSearchCategory] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const navigate = useNavigate();

  const fetchVehicles = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/vehicles');
      setVehicles(response.data);
    } catch (error) {
      alert("Failed to fetch vehicles");
    }
  };

  const searchVehicles = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.get('http://localhost:5000/api/vehicles/search', {
        params: { category: searchCategory, minPrice, maxPrice },
      });
      setVehicles(response.data);
    } catch (error) {
      alert("Search failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("userName");
    navigate("/");
  };

  useEffect(() => {
    fetchVehicles();
  }, []);

  return (
    <Box bg={"#f5f5f5"}>


      <Box h={"auto"} p={30} mb={10}>
        <Tabs isFitted variant='enclosed'>

          <TabPanels>
            <TabPanel>
              <Box mb='0.3em' className="search-form">
                <Input mb='0.8em' h={12} borderRadius="0" placeholder='Pick Up City, Airport, Address' background={"white"} value={searchCategory} onChange={(e) => setSearchCategory(e.target.value)} />
                <Input mb='0.8em' h={12} borderRadius="0" placeholder='Min Price' background={"white"} type="number" value={minPrice} onChange={(e) => setMinPrice(e.target.value)} />
                <Input mb='0.8em' h={12} borderRadius="0" placeholder='Max Price' background={"white"} type="number" value={maxPrice} onChange={(e) => setMaxPrice(e.target.value)} />
                <Button h={12} borderRadius="0" bg={"green"} onClick={searchVehicles}>Search</Button>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

      <Center mb={10}>
        <Heading fontWeight="" fontSize={["lg", "3xl", "3xl", '4xl']}>CHOOSE FROM OUR WIDE RANGE OF CARS</Heading>
      </Center>

      <Box className="vehicle-list">
        {vehicles.map((vehicle) => (
          <div key={vehicle._id} className="vehicle-card">
            <img src={vehicle.imageUrl} alt={vehicle.name} className="vehicle-image" />
            <div className="vehicle-details">
              <div><strong>Name:</strong> {vehicle.name}</div>
              <div><strong>Price:</strong> ${vehicle.price}</div>
              <div><strong>Category:</strong> {vehicle.category}</div>
              <div><strong>Availability:</strong> {vehicle.availability ? "Available" : "Not Available"}</div>
              <div className="vehicle-actions">
                <Link to={`/book/${vehicle._id}`} className="action-button">Book Now</Link>
                <Link to={`/review/${vehicle._id}`} className="action-button">Write Review</Link>
                <Link to={`/payment/${vehicle._id}`} className="action-button">Make Payment</Link>
              </div>
            </div>
          </div>
        ))}
      </Box>

      <Box h={660} position={'relative'} mt={10}>
        <Image h={"100%"} w={"100%"} src={secimg} />
        <Center
          w={[360, 480, 600, 600, 600]} p={30}
          style={{ background: "rgba(0,0,0,0.4)", position: "absolute", top: "60px", left: "50%", transform: "translate(-50%)" }}
        >
          <Flex flexDirection={'column'}>
            <Box><Heading textAlign="center" color={"white"} margin="0" size={["md", "lg", 'xl']}>Largest car sharing marketplace</Heading></Box>
            <Box><Heading paddingTop="10px" textAlign="center" color={"white"} margin="0" size={["xs", "md", 'md']}>Sedans for short distances, SUVs for tough terrains, luxury cars for surprises - we’ve got it all!</Heading></Box>
          </Flex>
        </Center>
      </Box>
      <Box style={{ height: "130px", marginTop: "12px" }}>
                <Center p={30}>
                    <Flex flexDirection={'column'}>
                        <Box><Heading textAlign="center" color={"black"} fontWeight="" margin="0" size={["md", "lg", 'xl']}>UNMATCHED BENEFITS</Heading></Box>
                        <Center><Box><Heading textAlign="center" color={"black"} fontWeight="xl" margin="0" size={["md", "md", 'md']}>Drive everywhere with freedom</Heading></Box></Center>
                    </Flex>
                </Center>
                
            </Box>
            <Box style={{ height: "130px", marginTop: "12px" }}>
            
                <Center p={30}>
                    <Flex flexDirection={'column'} className="sec">
                        <Box><Heading textAlign="center" color={"black"} fontWeight="" margin="0" size={["md", "lg", 'xl']}>WE LOVE GIVING BEST EXPERIENCES</Heading></Box>
                        <Center><Box><Heading textAlign="center" color={"black"} fontWeight="xl" margin="0" size={["md", "md", 'md']}>We cover you under all the circumstances to the best journey</Heading></Box></Center>
                    </Flex>
                </Center>
            </Box>
            <Box pt={"2rem"} bg={"#383838"} color={"white"}>
                <Tabs w={"90%"} margin="auto" bg="#383838" variant="unstyled">
                    <TabList justifyContent={'space-between'}>
                        <Tab _selected={{ borderBottom: "2px solid white" }}
                            fontWeight="bold"><Heading size={["xs", "md"]}>ABOUT US</Heading></Tab>
                        <Tab _selected={{ borderBottom: "2px solid white" }}
                            fontWeight="bold"><Heading size={["xs", "md"]}>BLOGS</Heading></Tab>
                        <Tab _selected={{ borderBottom: "2px solid white" }}
                            fontWeight="bold"><Heading size={["xs", "md"]}>CAREERS</Heading></Tab>
                        <Tab _selected={{ borderBottom: "2px solid white" }}
                            fontWeight="bold"><Heading size={["xs", "md"]}>HELP & SUPPORT</Heading></Tab>
                    </TabList>
                    <br />
                    <TabPanels>
                        <TabPanel>
                        
                            <Heading size="md">About Quick-Car</Heading>
                            <Text>Zoomcar is India’s largest marketplace for cars on rent. From short road trips to quick in-city drives for groceries, supply pick-up, food runs, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.</Text>
                            <Text>With Zoomcar, you can experience the convenience of online booking. The cars listed on our platform come with all-India permits that include vehicle insurance. It is extremely easy to pick up the car from the host location. You can drive unlimited KMs, with 100% Free Cancellation up to 6 hours before the trip start, 0 Security Deposit, 0 Toll Charges, and 24/7 Roadside Assistance. Car rent per KM starts as low as Rs. 49/hour. From short road trips to quick in-city drives for groceries, supply pick-up, meeting friends and family, doctor visits, business trips, we have the cheapest car rental options for all your needs! A hatchback for daily commute, a sedan for short trips, SUV for hills or a luxury car for a surprise.</Text>
                            <br />
                            <Heading size="md">Why Quick-Car ?</Heading>
                            <Text>You must never stop exploring! That’s why you get unlimited KMs with every booking!</Text>
                            <br />
                            <Heading size="md">Flying Soon? We’ll Be There!</Heading>
                            <br />
                            <Text>Car Rental in Bangalore Airport | Car Rental in Hyderabad Airport | Car Rental in Mumbai Airport | Car Rental in Delhi-NCR Airport | Car Rental in Chennai Airport | Car Rental in Pune Airport | Car Rental in Kolkata Airport | Car Rental in Ahmedabad Airport | Car Rental in Bhubaneswar Airport | Car Rental in Chandigarh Airport | Car Rental in Coimbatore Airport | Car Rental in Jaipur Airport | Car Rental in Kochi Airport | Car Rental in Mangalore Airport | Car Rental in Mysore Airport | Car Rental in Nagpur Airport | Car Rental in Surat Airport | Car Rental in Tirupati Airport | Car Rental in Trivandrum Airport | Car Rental in Vadodara Airport | Car Rental in Vijayawada Airport</Text>
                            <Heading size="md">We’ve Got A Car For All Your Needs:</Heading>
                            <br />
                            <Text>Cars to rent in Bangalore | Cars to rent in Mumbai | Cars to rent in Delhi NCR |Cars to rent in Chennai |Cars to rent in Pune |Cars to rent in Hyderabad |Cars to rent in Chandigarh |Cars to rent in Kolkata |Cars to rent in Ahmedabad |Cars to rent in Coimbatore |Cars to rent in Indore |Cars to rent in Jaipur Cars to rent in Vizag |Cars to rent in Goa |Cars to rent in Nagpur |Cars to rent in Kochi |Cars to rent in Vijayawada |Cars to rent in Siliguri |Cars to rent in Surat |Cars to rent in Bhopal |Cars to rent in Bhubaneswar | Cars to rent in Lucknow |Cars to rent in Guwahati |Cars to rent in Vadodara |Cars to rent in Ranchi |Cars to rent in Patna | Cars to rent in Raipur | Cars to rent in Jodhpur |Cars to rent in Nashik |Cars to rent in Trichy |Cars to rent in Madura</Text>
                            <Heading size="md">Want A Specific Car? We’ve Got It All:</Heading>
                            <br />
                            <Text>No need to meet the Hosts during the beginning & end of any booking! The Zoommcar smart-app allows you to lock & unlock the car directly through the app!</Text>
                            <Heading size="md">We’ve Got A Car For All Your Needs:</Heading>
                            <br />
                            <Text>From long durations to short distances, book a Zoomcar for all your needs: Rent SUV | Rent Hatchback | Rent Sedan | Rent EV</Text>
                            <Heading size="md">What Events Can I Rent A Zoomcar For?</Heading>
                            <br />
                            <Text>Zoomcar provides car rentals for music events, short trips within the city, trips with friends, trips with family, temple visits, long-duration trips, short-duration trips, road trips with friends and family & much more! Car rental starts as low as Rs. 49/hour.</Text>
                        </TabPanel>
                        <TabPanel>
                            <Heading size="md">Find more information about Zoomcar Blogs here</Heading>
                        </TabPanel>
                        <TabPanel>
                            <Heading size="md">Find more information about Zoomcar Careers here</Heading>
                        </TabPanel>
                        <TabPanel>
                            <Heading size="md">Find more information about Zoomcar Help and Support here</Heading>
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>

      <button className="logout-button" onClick={handleLogout}>Logout</button>
    </Box>
  );
}

export default Dashboard;
