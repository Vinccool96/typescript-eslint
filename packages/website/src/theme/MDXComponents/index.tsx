import Admonition from '@theme/Admonition';
import MDXComponents from '@theme-original/MDXComponents';

import { BaseRuleReference } from './BaseRuleReference';
import { HiddenHeading } from './HiddenHeading';
import { PackageLink } from './PackageLink';
import { RuleAttributes } from './RuleAttributes';
import { TryInPlayground } from './TryInPlayground';

export default {
  ...MDXComponents,
  Admonition,
  BaseRuleReference,
  HiddenHeading,
  PackageLink,
  RuleAttributes,
  TryInPlayground,
};
