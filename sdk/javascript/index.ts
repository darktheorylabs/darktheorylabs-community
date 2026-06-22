export class DarkTheoryClient {

  constructor(
    private endpoint: string
  ) {}

  async search(query: string) {

    const response = await fetch(
      `${this.endpoint}/retrieval/search`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ query })
      }
    );

    return response.json();
  }

}
