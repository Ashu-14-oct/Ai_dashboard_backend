# ai_predictions.py

import random
import json

def generate_mock_predictions():
    mock_data = []
    for _ in range(10):  # Generate 10 mock predictions
        input_data = random.randint(1, 100)
        actual_result = input_data * 2 + random.randint(-10, 10)
        predicted_result = actual_result + random.randint(-5, 5)
        mock_data.append({
            'input': input_data,
            'actual_result': actual_result,
            'predicted_result': predicted_result,
        })
    return mock_data

if __name__ == '__main__':
    predictions = generate_mock_predictions()
    with open('./ai_func/predictions.json', 'w') as f:
        json.dump(predictions, f)
