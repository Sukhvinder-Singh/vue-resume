import { getOrder, isVisible } from "./utils";

/**
 * @typedef {{order:Number, display:Boolean, organization:String, role:String, progression:Array, details:Array}} WorkExperienceObject
 */

/**
 * @typedef {{role: String, start: String, end: String}} ProgressionObject
 */

/**
 * 
 * @param {WorkExperienceObject} workExperienceObject 
 * @returns 
 */
export const workExperience = workExperienceObject => {
    return {
        /**
         * Get order of appearance
         * @returns {Number}
         */
        getOrder: () => getOrder(workExperienceObject),

        /**
         * Get visibility
         * @returns {Boolean}
         */
        isVisible: () => isVisible(workExperienceObject),

        /**
         * Get name of company
         * @returns {String}
         */
        getOrganization: () => workExperienceObject.organization,

        /**
         * Get role (job title) in the company
         * @returns {String}
         */
        getRole: () => workExperienceObject.role,

        /**
         * Get list of progression (promotions)
         * @returns {Array<string>}
         */
        getProgression: () => workExperienceObject.progression,

        /**
         * Get list of details about the job
         * @returns {Array<string>}
         */
        getDetails: () => workExperienceObject.details
    }
}

/**
 * 
 * @param {ProgressionObject} progressionObject 
 * @returns 
 */
export const progressionData = progressionObject => {
    return {
        getRole: () => progressionObject.role,
        getStart: () => progressionObject.start,
        getEnd: () => progressionObject.end
    }
}