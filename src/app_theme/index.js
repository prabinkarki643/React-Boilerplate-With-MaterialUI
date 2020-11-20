import { createMuiTheme} from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';

const app_theme = createMuiTheme({
  palette:palette,
  typography,
  overrides,
  zIndex: {
    appBar: 200,
    drawer: 100,
    modal:300
  }
});

export default app_theme;
