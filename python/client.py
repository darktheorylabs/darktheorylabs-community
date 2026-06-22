import requests

class DarkTheoryClient:

    def __init__(self, endpoint):
        self.endpoint = endpoint

    def search(self, query):

        return requests.post(
            f"{self.endpoint}/retrieval/search",
            json={
                "query": query
            }
        ).json()
