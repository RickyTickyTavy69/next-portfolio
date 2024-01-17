import { type SchemaTypeDefinition } from 'sanity'

import experience from "./schemas/experience";
import pageinfo from "./schemas/pageinfo";
import project from "./schemas/project";
import skill from "./schemas/skill";
import social from "./schemas/social";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [experience, pageinfo, project, skill, social]
}
