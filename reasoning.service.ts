export class ReasoningService {

  async generate(prompt: string) {

    return {
      output: `Reasoned answer for ${prompt}`
    };

  }

}
