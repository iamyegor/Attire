export default function getSearchParam(urlString: string, queryParam: string): string | null {
    const url = new URL(urlString);
    const queryParams = new URLSearchParams(url.search);

    return queryParams.get(queryParam);
}