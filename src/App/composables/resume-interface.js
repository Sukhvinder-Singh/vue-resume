import { getOrder, isVisible } from "./utils";

/**
 * 
 * @typedef {{section: String, heading: String, column: String, order: Number, display: Boolean, content: Array}} ResumeSectionObject 
 */

/**
 * 
 * @param {ResumeSectionObject} resumeSectionObject 
 * @returns 
 */
export const resumeSection = resumeSectionObject => {

    return {
        /**
         * Returns name of the section
         * @returns {String}
         */
        getSection: () => resumeSectionObject.section,

        /**
         * Returns heading of the section
         * @returns {String}
         */
        getHeading: () => resumeSectionObject.heading,

        /**
         * Returns column ("left" or "right")
         * @returns {String}
         */
        getColumn: () => resumeSectionObject.column,

        /**
         * Returns order of appearance
         * @returns {Number}
         */
        getOrder: () => getOrder(resumeSectionObject),

        /**
         * Returns visibility of the section
         * @returns {Boolean}
         */
        isVisible: () => isVisible(resumeSectionObject),

        /**
         * Returns contents in the section
         * @returns {Array<object>}
         */
        getContent: () => resumeSectionObject.content
    }
}

/**
 * Get all sections that are visible
 * @param {Array<ResumeSectionObject>} data 
 * @returns {Array} Visible sections array
 */
export const getVisibleSections = data => {
    return data.filter(resumeSectionObject => {
        return resumeSection(resumeSectionObject).isVisible() === true
    });
}

/**
 * Sort resume sections by thier order
 * @param {Array<ResumeSectionObject>} data 
 */
export const sortSectionsByOrder = data => {
    return data.sort((a, b) => {
        const x = resumeSection(a).getOrder();
        const y = resumeSection(b).getOrder();
        return x - y;
    });
}

/**
 * Get left or right column sections
 * @param {Array<ResumeSectionObject>} resumeData
 * @param {String} column 
 */
export const getColumnSections = (resumeData, column) => {
    return resumeData.filter(resumeSectionObject => {
        return resumeSection(resumeSectionObject).getColumn() === column
    });
}