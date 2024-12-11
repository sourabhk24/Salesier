import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentsArticle extends Struct.ComponentSchema {
  collectionName: 'components_components_articles';
  info: {
    displayName: 'article';
    icon: 'command';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsBlog extends Struct.ComponentSchema {
  collectionName: 'components_components_blogs';
  info: {
    displayName: 'Blog';
    icon: 'briefcase';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    image_video: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    key_points: Schema.Attribute.RichText;
    random_text: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsButtons extends Struct.ComponentSchema {
  collectionName: 'components_components_buttons';
  info: {
    description: '';
    displayName: 'button';
    icon: 'paperPlane';
  };
  attributes: {
    link: Schema.Attribute.String;
    Title: Schema.Attribute.String;
    type: Schema.Attribute.Enumeration<
      ['primary', 'secondary', 'outline', 'outline-icon']
    >;
  };
}

export interface ComponentsCaseStudy extends Struct.ComponentSchema {
  collectionName: 'components_components_case_studies';
  info: {
    displayName: 'Case_Study';
    icon: 'briefcase';
  };
  attributes: {
    review: Schema.Attribute.Component<'components.review', false>;
    review2: Schema.Attribute.Component<'components.review', false>;
    review3: Schema.Attribute.Component<'components.review', false>;
    review4: Schema.Attribute.Component<'components.review', false>;
    review5: Schema.Attribute.Component<'components.review', false>;
    review6: Schema.Attribute.Component<'components.review', false>;
  };
}

export interface ComponentsFeature extends Struct.ComponentSchema {
  collectionName: 'components_components_features';
  info: {
    description: '';
    displayName: 'feature_sec';
    icon: 'arrowRight';
  };
  attributes: {
    feature2: Schema.Attribute.Component<'components.article', false>;
    feature3: Schema.Attribute.Component<'components.article', false>;
    first: Schema.Attribute.Component<'components.article', false>;
  };
}

export interface ComponentsHeader extends Struct.ComponentSchema {
  collectionName: 'components_components_headers';
  info: {
    displayName: 'Header';
    icon: 'book';
  };
  attributes: {
    Subtitle: Schema.Attribute.Text;
    Title: Schema.Attribute.String;
  };
}

export interface ComponentsHeaderButton extends Struct.ComponentSchema {
  collectionName: 'components_components_header_buttons';
  info: {
    displayName: 'Header button';
    icon: 'cog';
  };
  attributes: {
    Get_a_demo: Schema.Attribute.Component<'components.buttons', false>;
    Industry: Schema.Attribute.Component<'components.buttons', true>;
    Resources: Schema.Attribute.Component<'components.buttons', true>;
    Salesier: Schema.Attribute.Component<'components.buttons', false>;
    Solutions: Schema.Attribute.Component<'components.buttons', true>;
    Talk_to_sales: Schema.Attribute.Component<'components.buttons', false>;
    Why_Salesier: Schema.Attribute.Component<'components.buttons', false>;
  };
}

export interface ComponentsReview extends Struct.ComponentSchema {
  collectionName: 'components_components_reviews';
  info: {
    description: '';
    displayName: 'review';
    icon: 'file';
  };
  attributes: {
    Description: Schema.Attribute.Text;
    img: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    name_role: Schema.Attribute.String;
    title: Schema.Attribute.String;
  };
}

export interface ComponentsTitle extends Struct.ComponentSchema {
  collectionName: 'components_components_titles';
  info: {
    description: '';
    displayName: 'Title';
    icon: 'calendar';
  };
  attributes: {
    title: Schema.Attribute.Text;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'components.article': ComponentsArticle;
      'components.blog': ComponentsBlog;
      'components.buttons': ComponentsButtons;
      'components.case-study': ComponentsCaseStudy;
      'components.feature': ComponentsFeature;
      'components.header': ComponentsHeader;
      'components.header-button': ComponentsHeaderButton;
      'components.review': ComponentsReview;
      'components.title': ComponentsTitle;
    }
  }
}
