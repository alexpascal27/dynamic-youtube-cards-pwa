import { TagCategory } from "@/types/tag-category";
import { Video } from "@/types/videos";

export const mockVideoSearchResponse = (category: TagCategory): Video[] => {
    switch (category) {
        case TagCategory.Gaming:
            return[
                    {
                        id: "1",
                        duration: "15:23",
                        name: "10 Amazing Facts Gamers Don't Know!",
                        iconURL: "https://via.placeholder.com/150",
                        thumbnailURL: "facts-gaming.jpeg",
                        creatorName: "FactMaster",
                        isCreatorVerified: false,
                        viewCount: 1000,
                        timeSincePublished: "1 day ago"
                    },
                    {
                        id: "2",
                        duration: "25:45",
                        name: "How to Hit The Perfect Steak Speedrun",
                        iconURL: "https://via.placeholder.com/150",
                        thumbnailURL: "steak-gaming.jpeg",
                        creatorName: "ChefGordon",
                        isCreatorVerified: true,
                        viewCount: 2000,
                        timeSincePublished: "2 months ago"
                    },
                    {
                        id: "3",
                        duration: "35:12",
                        name: "Top 20 Travel Destinations Your Favorite Streamers Visit",
                        iconURL: "https://via.placeholder.com/150",
                        thumbnailURL: "destinations-all.jpeg",
                        creatorName: "TravelGuru",
                        isCreatorVerified: false,
                        viewCount: 3000,
                        timeSincePublished: "3 years ago"
                    }
                ];
        case TagCategory.Learning:
            return [
                        {
                            id: "1",
                            duration: "15:23",
                            name: "10 Amazing Facts That Will Boost Your IQ!",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "facts-learning.jpeg",
                            creatorName: "FactMaster",
                            isCreatorVerified: false,
                            viewCount: 1000,
                            timeSincePublished: "1 day ago"
                        },
                        {
                            id: "2",
                            duration: "25:45",
                            name: "How to Cook the Perfect Steak According To Science",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "steak-learning.jpeg",
                            creatorName: "ChefGordon",
                            isCreatorVerified: true,
                            viewCount: 2000,
                            timeSincePublished: "2 months ago"
                        },
                        {
                            id: "3",
                            duration: "35:12",
                            name: "Top 20 Travel Destinations You Must Visit According To Science",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "destinations-all.jpeg",
                            creatorName: "TravelGuru",
                            isCreatorVerified: false,
                            viewCount: 3000,
                            timeSincePublished: "3 years ago"
                        }
                    ];
        case TagCategory.ForWomen:
            return [
                        {
                            id: "1",
                            duration: "15:23",
                            name: "10 Amazing Facts That You Should Know As A Woman!",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "facts-woman.jpeg",
                            creatorName: "FactMaster",
                            isCreatorVerified: false,
                            viewCount: 1000,
                            timeSincePublished: "1 day ago"
                        },
                        {
                            id: "2",
                            duration: "25:45",
                            name: "How to Cook the Perfect Steak the Feminine Way",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "steak-woman.jpeg",
                            creatorName: "ChefGordon",
                            isCreatorVerified: true,
                            viewCount: 2000,
                            timeSincePublished: "2 months ago"
                        },
                        {
                            id: "3",
                            duration: "35:12",
                            name: "Top 20 Travel Destinations That Will Empower You As A Woman",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "destinations-all.jpeg",
                            creatorName: "TravelGuru",
                            isCreatorVerified: false,
                            viewCount: 3000,
                            timeSincePublished: "3 years ago"
                        }
                    ];
        case TagCategory.All:
        default:
            return [
                        {
                            id: "1",
                            duration: "15:23",
                            name: "10 Amazing Facts You Didn't Know!",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "facts-all.jpeg",
                            creatorName: "FactMaster",
                            isCreatorVerified: false,
                            viewCount: 1000,
                            timeSincePublished: "1 day ago"
                        },
                        {
                            id: "2",
                            duration: "25:45",
                            name: "How to Cook the Perfect Steak",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "steak-all.jpeg",
                            creatorName: "ChefGordon",
                            isCreatorVerified: true,
                            viewCount: 2000,
                            timeSincePublished: "2 months ago"
                        },
                        {
                            id: "3",
                            duration: "35:12",
                            name: "Top 20 Travel Destinations You Must Visit Before You Die",
                            iconURL: "https://via.placeholder.com/150",
                            thumbnailURL: "destinations-all.jpeg",
                            creatorName: "TravelGuru",
                            isCreatorVerified: false,
                            viewCount: 3000,
                            timeSincePublished: "3 years ago"
                        }
                    ];
    }
};