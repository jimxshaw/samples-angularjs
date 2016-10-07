export interface ApiResponse {
    data: {
        children: {
            data: Submission
        }[];
    }
}

export interface Submission {
    author: string;
    domain: string;
    title: string;
    url: string;
}