import {gql} from "@apollo/client";

export const videoSearchTagsQuery = gql`
            query GetVideos($tag: String) {
                videoSearch(tag: $tag) {
                    id,
                    duration
                    name,
                    iconURL,
                    thumbnailURL,
                    creatorName,
                    isCreatorVerified,
                    viewCount,
                    timeSincePublished
                }
            }
        `;