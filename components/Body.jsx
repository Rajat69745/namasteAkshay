import React from 'react'
import RestoCard from './RestoCard'
import './Body.css'

const Body = () => {

  const data = [
    {
      "info": {
        "id": "156149",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "wdjh6lwamkwopndjp0k0",
        "locality": "Dharwad Road",
        "areaName": "Vidyagiri",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Pizzas",
          "Italian",
          "Pastas",
          "Desserts"
        ],
        "avgRating": 3.9,
        "feeDetails": {
          "restaurantId": "156149",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "2456",
        "avgRatingString": "3.9",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 25,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "30% OFF",
          "subHeader": "UPTO ₹75"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/dominos-pizza-road-vidyagiri-dharwad-156149",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "445631",
        "name": "Pizza Hut",
        "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
        "locality": "Shivanand Nagar",
        "areaName": "Hosayellapur",
        "costForTwo": "₹350 for two",
        "cuisines": [
          "Pizzas"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "445631",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "721",
        "avgRatingString": "3.8",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 2.3,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "2.3 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:59:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/pizza-hut-shivanand-nagar-hosayellapur-dharwad-445631",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "416858",
        "name": "KFC",
        "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
        "locality": "Poona Road",
        "areaName": "Maratha Colony",
        "costForTwo": "₹400 for two",
        "cuisines": [
          "Burgers",
          "Biryani",
          "American",
          "Snacks",
          "Fast Food"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "416858",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1100
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1100
        },
        "parentId": "547",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 3,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "3.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kfc-poona-road-maratha-colony-dharwad-416858",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "431459",
        "name": "Hotel New Dolphin",
        "cloudinaryImageId": "hnchxcaex57wvk3zcaza",
        "locality": "Dharwad Circle",
        "areaName": "Maratha Colony",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Biryani",
          "Kebabs",
          "Tandoor",
          "Snacks",
          "Beverages",
          "North Indian"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "431459",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "236787",
        "avgRatingString": "4.0",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 19,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "19 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "50% OFF",
          "subHeader": "UPTO ₹100"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-new-dolphin-circle-maratha-colony-dharwad-431459",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "368380",
        "name": "Hotel shree ganesh",
        "cloudinaryImageId": "y1lrtpuphluyshxlo7b8",
        "locality": "Yalakki Shettar Colony",
        "areaName": "Central Dharwad",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 3.6,
        "feeDetails": {
          "restaurantId": "368380",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "102323",
        "avgRatingString": "3.6",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-shree-ganesh-yalakki-shettar-colony-central-dharwad-dharwad-368380",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "423705",
        "name": "Hotel Dolphin",
        "cloudinaryImageId": "gjjctbqoc1sop1a1t4hb",
        "locality": "Srinagar",
        "areaName": "Maratha Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Seafood",
          "Tandoor",
          "North Indian",
          "Chinese"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "423705",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 3400
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 3400
        },
        "parentId": "98815",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 5,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "5.0 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-dolphin-srinagar-maratha-colony-dharwad-423705",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "153340",
        "name": "Shri Panjurli Lunch Home And Fish Land",
        "cloudinaryImageId": "i2n85effvsuk4mbki4bd",
        "locality": "Kc Park",
        "areaName": "Malmaddi",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Seafood",
          "Snacks",
          "Beverages",
          "Chinese"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "153340",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "186752",
        "avgRatingString": "4.0",
        "totalRatingsString": "5K+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.7,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "4.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:29:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "40% OFF",
          "subHeader": "UPTO ₹80"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/shri-panjurli-lunch-home-and-fish-land-kc-park-malmaddi-dharwad-153340",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "203773",
        "name": "Hotel Sagar",
        "cloudinaryImageId": "yet0ansor4bvqaorwyez",
        "locality": "Dharwad",
        "areaName": "Maratha Colony",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Beverages",
          "Kebabs"
        ],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "203773",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "8935",
        "avgRatingString": "3.7",
        "totalRatingsString": "500+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 1.6,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "1.6 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "₹125 OFF",
          "subHeader": "ABOVE ₹249",
          "discountTag": "FLAT DEAL"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-sagar-maratha-colony-dharwad-203773",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "389776",
        "name": "Kamat Hotel",
        "cloudinaryImageId": "oalmmyvtavyol8enokzr",
        "locality": "Subhas Road",
        "areaName": "Vidyagiri",
        "costForTwo": "₹150 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Indian"
        ],
        "avgRating": 4,
        "veg": true,
        "feeDetails": {
          "restaurantId": "389776",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "114320",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 21:45:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/kamat-hotel-subhas-road-vidyagiri-dharwad-389776",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "529260",
        "name": "Royal Kitchen",
        "cloudinaryImageId": "kb3cesk0w7x4fc45bkio",
        "locality": "Akki Peth",
        "areaName": "Central Dharwad",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Desserts",
          "Kebabs"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "529260",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "19079",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/royal-kitchen-akki-peth-central-dharwad-dharwad-529260",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "570341",
        "name": "Flavours of Andhra",
        "cloudinaryImageId": "yrnlpbqxssy7alhynimb",
        "locality": "Jayanagar",
        "areaName": "Narayanpura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "Snacks",
          "Beverages",
          "Chinese",
          "North Indian"
        ],
        "avgRating": 4,
        "feeDetails": {
          "restaurantId": "570341",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "18898",
        "avgRatingString": "4.0",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 25,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "25 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:30:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/flavours-of-andhra-jayanagar-narayanpura-dharwad-570341",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "438293",
        "name": "Hotel Parampara",
        "cloudinaryImageId": "gynj6rqcuckpuacbk13w",
        "locality": "Jubilee Circle",
        "areaName": "Maratha Colony",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Tandoor",
          "Snacks",
          "Beverages"
        ],
        "avgRating": 3.8,
        "veg": true,
        "feeDetails": {
          "restaurantId": "438293",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "100993",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 23,
          "lastMileTravel": 3.9,
          "serviceability": "SERVICEABLE",
          "slaString": "23 mins",
          "lastMileTravelString": "3.9 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "10% OFF",
          "subHeader": "UPTO ₹40"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/hotel-parampara-jubilee-circle-maratha-colony-dharwad-438293",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "423132",
        "name": "Karnatak Bhavan",
        "cloudinaryImageId": "eftkl0envujbzsql6q4f",
        "locality": "Pb Road",
        "areaName": "Narayanpura",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "South Indian",
          "Chinese",
          "Beverages"
        ],
        "avgRating": 4.1,
        "veg": true,
        "feeDetails": {
          "restaurantId": "423132",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "235681",
        "avgRatingString": "4.1",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 3.8,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "3.8 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:30:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/karnatak-bhavan-pb-road-narayanpura-dharwad-423132",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "368295",
        "name": "Basaveshwar Khanvali",
        "cloudinaryImageId": "lcgtv8aqulwni0e2g5om",
        "locality": "Khb Colony",
        "areaName": "Vidyagiri",
        "costForTwo": "₹200 for two",
        "cuisines": [
          "North Indian"
        ],
        "avgRating": 4.3,
        "veg": true,
        "feeDetails": {
          "restaurantId": "368295",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "42125",
        "avgRatingString": "4.3",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 21,
          "lastMileTravel": 3.7,
          "serviceability": "SERVICEABLE",
          "slaString": "21 mins",
          "lastMileTravelString": "3.7 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:00:00",
          "opened": true
        },
        "badges": {
          "imageBadges": [
            {
              "imageId": "v1695133679/badges/Pure_Veg111.png",
              "description": "pureveg"
            }
          ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              "badgeObject": [
                {
                  "attributes": {
                    "description": "pureveg",
                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                  }
                }
              ]
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/basaveshwar-khanvali-khb-colony-vidyagiri-dharwad-368295",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "450808",
        "name": "AFC American Fried Chicken",
        "cloudinaryImageId": "hepxljnp1hsd2spe8zt1",
        "locality": "Kc Park",
        "areaName": "Narayanpura",
        "costForTwo": "₹250 for two",
        "cuisines": [
          "Chinese",
          "Burgers"
        ],
        "avgRating": 3.8,
        "feeDetails": {
          "restaurantId": "450808",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "27385",
        "avgRatingString": "3.8",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 24,
          "lastMileTravel": 4.4,
          "serviceability": "SERVICEABLE",
          "slaString": "24 mins",
          "lastMileTravelString": "4.4 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "aggregatedDiscountInfoV3": {
          "header": "20% OFF",
          "subHeader": "UPTO ₹50"
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/afc-american-fried-chicken-kc-park-narayanpura-dharwad-450808",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "258665",
        "name": "Atithi Family Restaurant",
        "cloudinaryImageId": "cq3zbubeydsopfunkmq8",
        "locality": "Saptapur Road",
        "areaName": "Maratha Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "Biryani",
          "North Indian",
          "Chinese",
          "Beverages",
          "Kebabs"
        ],
        "avgRating": 3.7,
        "feeDetails": {
          "restaurantId": "258665",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "37572",
        "avgRatingString": "3.7",
        "totalRatingsString": "100+",
        "sla": {
          "deliveryTime": 20,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "20 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 23:00:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/atithi-family-restaurant-saptapur-road-maratha-colony-dharwad-258665",
        "type": "WEBLINK"
      }
    },
    {
      "info": {
        "id": "153700",
        "name": "Ashoka The Great Restaurant",
        "cloudinaryImageId": "h38hh34sibawktqmgmhx",
        "locality": "Haliyal Road",
        "areaName": "Maratha Colony",
        "costForTwo": "₹300 for two",
        "cuisines": [
          "North Indian",
          "Chinese",
          "Snacks",
          "Tandoor"
        ],
        "avgRating": 4.1,
        "feeDetails": {
          "restaurantId": "153700",
          "fees": [
            {
              "name": "BASE_DISTANCE",
              "fee": 1200
            },
            {
              "name": "BASE_TIME"
            },
            {
              "name": "ANCILLARY_SURGE_FEE"
            }
          ],
          "totalFee": 1200
        },
        "parentId": "37043",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
          "deliveryTime": 27,
          "lastMileTravel": 4.5,
          "serviceability": "SERVICEABLE",
          "slaString": "27 mins",
          "lastMileTravelString": "4.5 km",
          "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
          "nextCloseTime": "2023-10-23 22:40:00",
          "opened": true
        },
        "badges": {
          
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
          "entityBadges": {
            "imageBased": {
              
            },
            "textBased": {
              
            },
            "textExtendedBadges": {
              
            }
          }
        },
        "loyaltyDiscoverPresentationInfo": {
          "badgeType": "BADGE_TYPE_OFFER_PACK",
          "offerSubText": "with offer pack",
          "nonSwiggyOneFreedelMessage": "FREE DELIVERY"
        },
        "differentiatedUi": {
          "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
          "differentiatedUiMediaDetails": {
            "mediaType": "ADS_MEDIA_ENUM_IMAGE",
            "lottie": {
              
            },
            "video": {
              
            }
          }
        },
        "reviewsSummary": {
          
        },
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {
          
        }
      },
      "analytics": {
        
      },
      "cta": {
        "link": "https://www.swiggy.com/restaurants/ashoka-the-great-restaurant-haliyal-road-maratha-colony-dharwad-153700",
        "type": "WEBLINK"
      }
    }
  ]


  return <>  <input type="text" placeholder='Search' />
  
  



  <div className='resCardBody'>
    
  
 {data.map((el)=>(

<RestoCard  key={el.info.id} resData={el} />


 ))}


  </div>

  </>
  
  
}

export default Body