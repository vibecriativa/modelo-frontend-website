const cache = new Map();

export async function fetchContentWithCache(data: any) {
    const cacheKey = JSON.stringify(data);
    if (cache.has(cacheKey)) {
        return cache.get(cacheKey);
    }

    const response = await fetch("https://api.econmissaoflorida.com/v1/api/content/contents", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ data }),
    });

    const result = await response.json();
    cache.set(cacheKey, result.data);
    return result.data;
}

export interface ContentData {
  content: {
      [key: string]: {
          hash_id: string;
      };
  };
}

export interface FetchedContent {
  data: any[];
}

export interface FetchError {
  message: string;
}

export async function fetchContent(hashIdsArray: string[]): Promise<any[] | null> {
  const componentData: ContentData = {
      content: hashIdsArray.reduce((acc, hashId, index) => {
          acc[index] = { hash_id: hashId };
          return acc;
      }, {} as { [key: string]: { hash_id: string } })
  };

  try {
      const content = await fetchContentWithCache(componentData);
      return content;
  } catch (error) {
      console.error("Error fetching content:", error);
      return null;
  }
}