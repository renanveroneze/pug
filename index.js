import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { dirname } from 'path'
import c from 'colors'
import pug from 'pug'

export default ( file ) => {

    const source = pug.renderFile( file, { pretty: '    ' } )
    const output = '../' + file.replace('.pug', '.php')

    if( !existsSync( dirname( output ) ) ) mkdirSync( dirname( output ), { recursive: true } )

    writeFileSync( output, source )

    console.log( '\n', c.green('✓'), file.replace('../modules/', ''), 'was successfully compiled...' )

}
