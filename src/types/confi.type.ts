export type configType = {
  verbs: VerbForm[];
  config: {
    select: boolean;
    type: boolean;
  };
};

type VerbType = 'regular' | 'irregular';

export type VerbForm = {
  type: VerbType;
  base_form: string;
  spanish_form: string[];
  variation: {
    past_form: string;
    var_form: string;
  };
};
