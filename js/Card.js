/**
 * The Card object.
 */
/**
 * Create a Card object.
 */
class Card {
    /**
     * Create an instance of the Card object.
     * @param data A Project object.
     */
    constructor(data) {
        Object.assign(this, data);
    }
    /**
     *
     * @returns Get an HTML representation of the Card object as a string.
     */
    getHtml() {
        const { title, description, link, thumbnail, alt, tag } = this;
        return `
            <div class="card ${tag}">
                <div class="card-description">
                    <h4>${title}</h4>
                    <p>${description}</p>
                </div>
                <a href=${link} target="_blank" class="card-links">
                    <img src=${thumbnail} class="card-img" alt=${alt}>
                </a>
            </div>
        `;
    }
}
export default Card;
