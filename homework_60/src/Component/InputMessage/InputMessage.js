import React from 'react';

const InputMessage = () => {
    return (
        <div className="WriteMessage">
            <form>
                <fieldset>
                    <legend>Отправить Сообщение</legend>
                    <textarea rows="5" cols="85" name="text"/>
                    <button type="submit">Отправить</button>
                </fieldset>
            </form>
        </div>
    );
};

export default InputMessage;