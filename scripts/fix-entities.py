import os
import re

def fix_file(filepath):
    with open(filepath, 'r') as f:
        content = f.read()
    
    # Simple regex to find text between tags, avoiding common JSX attributes
    # This is a heuristic: match text between > and <
    def replace_entities(match):
        text = match.group(0)
        # Avoid replacing if it's a tag or closing tag only
        if text.startswith('>') and text.endswith('<'):
            inner = text[1:-1]
            inner = inner.replace("'", "&apos;").replace('"', '&quot;')
            return f'>{inner}<'
        return text

    # Find text between > and <
    new_content = re.sub(r'>[^<]+<', replace_entities, content)
    
    with open(filepath, 'w') as f:
        f.write(new_content)

files_to_fix = [
    "src/app/(site)/kilimanjaro/page.tsx",
    "src/app/(site)/kilimanjaro/deposit/page.tsx",
    "src/app/(site)/kilimanjaro/guide/page.tsx",
    "src/app/(site)/kilimanjaro/joining-groups/page.tsx",
    "src/app/(site)/request-quote/page.tsx",
    "src/app/(site)/itineraries/[slug]/page.tsx",
    "src/app/(site)/page.tsx"
]

for f in files_to_fix:
    path = os.path.join(os.getcwd(), f)
    if os.path.exists(path):
        print(f"Fixing {f}")
        fix_file(path)
