import axois from 'axios'

export interface IEmojiItem {
    id: number;
    emoji: string;
    title: string;
    keywords: string;
}

const API_URL = 'http://localhost:3000/api/emojis'

export const getEmojis = async (query?: string) : Promise<IEmojiItem[]> => {
    try {
        const params = query ? { q: query } : undefined;

        const response = await axois.get<IEmojiItem[]>(API_URL, { params });

        return response.data
    } catch (error) {
        console.error(error);
        throw error;
    }

}

